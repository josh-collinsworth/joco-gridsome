<template>
	<p class="fancy details">You can also find me on
		<xa to="github.com/josh-collinsworth">
			GitHub
		</xa>
		and
		<xa to="codepen.io/collinsworth">
			CodePen
		</xa>
		.
	</p>
</template>


<style lang="scss" scoped>
#work-links {
	padding: 0;
	margin: 0 0 2rem;
	list-style-type: none;
	display: flex;
	align-items: center;
	height: 2rem;

	p {
		margin: 0 1rem 0 0;
	}

	li {
		margin: 0;
	}

	li a {
		width: 2rem;
		display: block;
		margin-right: .5rem;

		&:hover {
			opacity: .6;
		}

		img {
			display: block;
			width: 100%;
		}
	}
}
</style>
