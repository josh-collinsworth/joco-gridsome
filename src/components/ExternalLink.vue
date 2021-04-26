<template>
	<a :href="`https://${sanitizedTo}`" rel="noreferrer noopener" :target="target">
		<slot />
	</a>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true,
		},
		openInNewTab: {
			type: Boolean | String,
			default: false,
		}
	},
	computed: {
		sanitizedTo() {
			return this.to.split('//').pop()
		},
		target() {
			return this.openInNewTab == 'true' ? '_blank' : false
		}
	}
}
</script>
