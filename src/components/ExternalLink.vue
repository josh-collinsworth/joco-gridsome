<template>
	<a :href="`https://${sanitizedTo}`" rel="noreferrer noopener" target="_blank">
		<slot />
	</a>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true
		}
	},
	computed: {
		sanitizedTo() {
			return this.to.split('//').pop()
		}
	}
}
</script>
