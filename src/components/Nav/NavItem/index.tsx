import classNames from 'classnames';

import style from './index.module.css';

/**
 * NavItem
 *
 * @param {Object} { type, handleClick }
 * @return {React.ReactElement}
 */
function NavItem(props) {

	const {
		title,
		type,
		handleClick,
		disabled = false
	} = props;

	const cn = classNames([
		style.icon,
		style[type]
	]);

	return (
		<button
			title={title}
			type="button"
			class={cn}
			onClick={handleClick}
			disabled={disabled}
		/>
	);

}

export default NavItem;
