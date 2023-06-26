import { select } from 'd3-selection';

class d3BarChart {

  constructor(refElement, args) {

    this.refElement = refElement;

    this.margin = args.margin || { top: 30, right: 30, bottom: 50, left: 70 };

    this.width = (args.width || 960) - this.margin.left - this.margin.right;
    this.height = (args.height || 500) - this.margin.top - this.margin.bottom;

    this.barClass = args.barClass || 'black';

    this.refElement.innerHTML = '';

    this.tooltip = select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

  }

}

export default d3BarChart;
