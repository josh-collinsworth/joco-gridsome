<template>
	<div class="cell" :style="{ background: color, gridArea: `span ${size} / span ${size}` }"></div>
</template>


<script>
export default {
	props: {
		color: String,
		size: Number
	}
}
</script>


<style scoped>

</style>
