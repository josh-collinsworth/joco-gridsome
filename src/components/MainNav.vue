<template>
	<nav
		id="main-nav"
		:class="menuOpen ? 'open' : ''"
		class="nav"
		role="navigation"
		:aria-hidden="!menuOpen"
	>
		<ul>
			<li :class="menuOpen && 'open'"><g-link class="nav__link" to="/projects">Projects</g-link></li>
			<li :class="menuOpen && 'open'"><g-link class="nav__link" to="/about">About</g-link></li>
			<li :class="menuOpen && 'open'"><g-link class="nav__link" to="/blog">Blog</g-link></li>
			<li :class="menuOpen && 'open'"><g-link class="nav__link" to="/contact">Contact</g-link></li>
			<li :class="menuOpen && 'open'"><g-link class="nav__link" to="/uses">Uses</g-link></li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		menuOpen: Boolean,
		required: true
	}

}
</script>

<style lang="scss" scoped>
	#main-nav {
		ul {
			list-style-type: none;
			padding: 0;
		}

		@media(max-width: 767px) {
			position: absolute;
			transition: all .5s cubic-bezier(1, 0, 0, 1);
			transform: translateX(-100vw);
			background: var(--darkBlue);
			width: 100vw;
			height: 100vh;
			top: 0;
			left: 0;
			display: flex;
			flex-wrap: wrap;
			place-content: center;
			color: var(--white);
			padding: 3rem;
			font-size: 1.2rem;

			&.open {
				transform: translateX(0)
			}

			ul {
				list-style-type: none;
				text-align: left;
				width: 100%;

				li {
					transform: translateX(-100%);
					opacity: 0;
					transition: all .5s cubic-bezier(1, 0, 0, 1);

					&.open {
						transform: translateX(0vw);
						opacity: 1;

						@for $i from 1 through 9 {
							&:nth-of-type(#{$i}) {
								transition-delay: $i * 0.075 + s;
							}
						}
					}
				}

				a {
					color: var(--white);
				}
			}
		}

		@media(min-width: 768px) {
			display: block;

			ul {
				display: flex;
				flex-wrap: wrap;
			}
		}
	}
</style>
