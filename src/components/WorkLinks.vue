<template>
	<ul id="work-links">
		<p>Find me on:</p>
		<li>
			<ExternalLink to="github.com/josh-collinsworth">
				<img :src="`${imageSrc}/2019/02/GitHub-Mark-120px-plus.png`" alt="" />
				<span class="sr">GitHub profile</span>
			</ExternalLink>
		</li>

		<li>
			<ExternalLink to="codepen.io/joshuajcollinsworth">
				<img :src="`${imageSrc}/2018/01/Codepen-Button-Fill-Black-Large.png`" alt="">
				<span class="sr">CodePen profile</span>
			</ExternalLink>
		</li>
	</ul>
</template>


<script>
export default {
	data: () => ({
		imageSrc: 'https://api.joshcollinsworth.com/wp-content/uploads/'
	})
}
</script>


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
