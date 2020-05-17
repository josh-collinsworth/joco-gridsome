<template>
	<g-link :to="to" class="tag">
		<slot />
	</g-link>
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
	padding: .25em .5em;
	background: var(--darkBlue);
	margin-right: .5em;
	color: var(--white);
	text-decoration: none;

	&:hover {
		background: var(--lightBlue);
		color: var(--ink);
	}
}
</style>
