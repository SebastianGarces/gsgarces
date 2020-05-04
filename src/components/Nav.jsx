import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
	return (
		<StyledNav>
			<Link href="/">
				<NavLink>Home</NavLink>
			</Link>
			<Link href="/blog">
				<NavLink>Blog</NavLink>
			</Link>
			<Link href="/portfolio">
				<NavLink>Portfolio</NavLink>
			</Link>
			<Link href="/keyframes">
				<NavLink>Keyframes</NavLink>
			</Link>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	position: fixed;
	bottom: 0;
	width: 100%;

	background-color: black;
	border-top: solid 1px gray;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1.3fr;
	grid-template-rows: 50px;

	@media only screen and (min-width: 1024px) {
		top: 0;
		bottom: initial;

		width: 80%;
		margin: 0 auto;
	}
`;

const NavLink = styled.a`
	color: white;
	background-color: black;
	font-weight: 500;
	padding: 1rem 0;
	text-align: center;
	cursor: pointer;

	height: 100%;
	width: 100%;

	&:hover,
	&:active,
	&:focus {
		background-color: rgba(255, 255, 255, 0.12);
	}
`;
