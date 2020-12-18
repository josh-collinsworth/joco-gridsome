<template>
	<div>
		<HamburgerButton :menu-open="menuOpen" @toggleMenu="$emit('toggleMenu')" />

		<nav
			id="mobile-nav"
			class="main-nav nav"
			role="navigation"
			:class="menuOpen ? 'open' : ''"
			:aria-hidden="!menuOpen"
		>
			<ul>
				<li v-for="page in pages" :class="{ 'open': menuOpen }" :key="page + '-m'">
					<g-link class="nav__link" :to="`/${page.toLowerCase()}`" :tabindex="menuOpen ? 0 : -1">
						<span>{{page}}</span>
					</g-link>
				</li>
			</ul>
		</nav>

		<nav id="desktop-nav" class="main-nav nav" role="navigation">
			<ul>
				<li v-for="page in pages" :key="page + '-d'">
					<g-link class="nav__link" :to="`/${page.toLowerCase()}`">
						<span>{{page}}</span>
					</g-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import { pages } from '../../gridsome.config' //Gets the list of pages from the Gridsome config file
import HamburgerButton from '~/components/HamburgerButton'

export default {
	props: {
		menuOpen: Boolean,
		required: true
	},

	components: {
		HamburgerButton
	},

	data: () => ({
		pages: pages
	}),
}
</script>

<style lang="scss">
.main-nav {

	ul {
		list-style-type: none;
		padding: 0;

		li {
			margin: 0;
		}
	}

	&#mobile-nav {
		display: block;
		position: fixed;
		transition: all .4s cubic-bezier(1, 0, 0, 1);
		transform: translateX(-100vw);
		background: var(--darkBlue);
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		display: flex;
		flex-wrap: wrap;
		place-content: center;
		padding: 3rem;

		@media (min-width: 768px) {
			display: none;
		}

		&.open {
			transform: translateX(0)
		}

		ul {
			list-style-type: none;
			text-align: left;
			width: 100%;

			li {
				transform: translateX(-3em);
				opacity: 0;
				transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
				margin-bottom: .75rem;
				font-size: 1.25rem;
				line-height: 1.5em;
				color: var(--white);

				&.open {
					transform: translateX(0vw);
					opacity: 1;

					@for $i from 1 through 9 {
						&:nth-of-type(#{$i}) {
							transition-delay: $i * 0.10 + s;
						}
					}
				}

				a {
					padding: .5rem 0 .25rem;
					color: var(--white);
					display: block;

					span {
						display: inline-block;
					}
				}
			}
		}
	}

	&#desktop-nav {
		display: none;

		@media(min-width: 768px) {
			display: flex;
			justify-content: flex-end;

			ul {
				display: flex;
				flex-wrap: wrap;
				margin: 0 0 0 2em;
				width: auto;
				font-size: .875rem;

				li {
					margin-left: 1.5em;
				}

				a {
					color: var(--ink);
					margin: 0;

					&:hover {
						color: var(--link-color);
					}
				}
			}
		}
	}
}
</style>
