import type { ComponentChildren } from "preact";

import style from './style.module.css';

interface Props {
	children: ComponentChildren;
}

function Nav({ children }: Props) {
	return (
		<section class={style.nav}>
			{children}
		</section>
	);
}

export default Nav;
