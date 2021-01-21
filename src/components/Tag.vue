<template>
	<li>
		<g-link :to="to" class="tag">
			<slot />
		</g-link>
	</li>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.tag {
	display: block;
	padding: .5em 1em;
	background: var(--darkBlue);
	margin: 0 .5em 0 0;
	color: var(--white);
	text-decoration: none;

	&:hover {
		background: var(--lightBlue);
		color: var(--ink);
	}
}
</style>
