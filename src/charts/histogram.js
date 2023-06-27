// @ts-nocheck

import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { bin, max } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { format } from 'd3-format';
import 'd3-transition';

import d3BarChart from './d3BarChart.js';

class Histogram extends d3BarChart {

	constructor(refElement, args) {
		super(refElement, args);
		this.initArgs(args);
		this.initChart();
		this.createChart();
	}

	initArgs(args) {
		Object.keys(args).forEach(arg => {
			this[arg] = args[arg];
		});
	}

	initChart() {
		this.svg = select(this.refElement)
			.append('svg')
			.attr('width', this.width + this.margin.left + this.margin.right)
			.attr('height', this.height + this.margin.top + this.margin.bottom)
			.append('g')
			.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
	}

	createChart() {
		this.initXScale();
		this.initYScale();
		this.initHistogram();
		this.initBin();
		this.addBars();
		if (this.xAxisLabel) this.addXLabel();
		if (this.yAxisLabel) this.addYLabel();
		this.addXAxis();
		this.addYAxis();
	}

	initXScale() {
		this.xScale = scaleLinear()
			.domain([ 1, 59 ])
			.range([ 0, this.width ]);
	}

	initYScale() {
		this.yScale = scaleLinear()
			.range([ this.height, 0 ]);
	}

	initHistogram() {
		this.histogram = bin()
			.domain(this.xScale.domain())
			.thresholds(this.xScale.ticks(59));
	}

	initBin() {
		this.bin = this.histogram(this.data);
		this.adjustYDomain();
	}

	adjustYDomain() {
		this.yScale.domain([ 0, max(this.bin, d => d.length) + 10 ]);
	}

	addBars() {

		this.svg
			.selectAll('rect')
			.data(this.bin)
			.enter()
			.append('rect')
			.attr('class', this.barClass)
			.attr('x', 1)
			.attr('transform', d => `translate(${this.xScale(d.x0)}, ${this.yScale(d.length)})`)
			.attr('width', d => this.xScale(d.x1) - this.xScale(d.x0) - 1)
			.attr('height', d => this.height - this.yScale(d.length))
			.on('mouseover', (e, d) => {

				const pos = e.target.getBoundingClientRect();

				this.tooltip
					.transition()
					.duration(200)
					.style('opacity', 0.9);

				this.tooltip.html(`${d[0]}: ${d.length}`);

				const { width: toolTipWidth } = select('.tooltip').node().getBoundingClientRect();

				const barCenter = Math.floor(pos.left + Math.floor(pos.width / 2));

				this.tooltip
					.style('left', `${barCenter - Math.floor(toolTipWidth / 2)}px`)
					.style('top', `${pos.top + window.scrollY - 30}px`);

			})
			.on('mouseout', () => {
				this.tooltip
					.transition()
					.duration(500)
					.style('opacity', 0);
			});
	}

	createXAxis() {
		this.xAxis = axisBottom(this.xScale);
	}

	addXAxis() {
		this.createXAxis();
		this.svg.append('g')
			.style('font-size', '1rem')
			.attr('transform', `translate(0, ${this.height})`)
			.call(this.xAxis);
	}

	createYTicks() {
		this.yTicks = this.yScale
			.ticks()
			.filter(Number.isInteger);
	}

	createYAxis() {
		this.yAxis = axisLeft(this.yScale)
			.tickValues(this.yTicks)
			.tickFormat(format('d'));
	}

	addYAxis() {
		this.createYTicks();
		this.createYAxis();
		this.svg.append('g')
			.style('font-size', '1rem')
			.attr('transform', `translate(${this.height}, 0`)
			.call(this.yAxis);
	}

	addXLabel() {
		this.svg
			.append('text')
			.attr('class', this.labelClass)
			.attr('transform', `translate(${this.width / 2}, ${this.height + this.margin.top + 20})`)
			.style('text-anchor', 'middle')
			.text(this.xAxisLabel);
	}

	addYLabel() {
		this.svg
			.append('text')
			.attr('class', this.labelClass)
			.attr('transform', 'rotate(-90)')
			.attr('y', 0 - this.margin.left)
			.attr('x', 0 - (this.height / 2))
			.attr('dy', '1em')
			.style('text-anchor', 'middle')
			.text(this.yAxisLabel);
	}

}

export default Histogram;
