<template>
	<div
		class="cell"
		:style="{
			background: color,
			gridArea: `span ${size} / span ${size}`,
			animationDelay: randomDelay(),
			transform: `translateY(${randomDrop()})`
		}"
	>
	</div>
</template>


<script>
export default {
	data: () => ({
		size: 1
	}),
	props: {
		color: String,
	},
	created() {
		const cellSize = Math.random()
		if (cellSize > 0.95) {
			this.size = 3
		} else if (cellSize > 0.8) {
			this.size = 2
		}
	},
	methods: {
		randomDelay() {
			return Math.random() * .25 + "s"
		},
		randomDrop() {
			const drop = Math.random() * 100
			if (drop > 93) {
				return '1rem'
			} else if (drop > 84) {
				return '.5rem'
			} else if (drop > 77) {
				return '-.5rem'
			} else if (drop > 70) {
				return '-1rem'
			}
			return '0'
		}
	}
}
</script>


<style scoped>
.cell {
	opacity: 0;
	animation: fadeCellIn .2s ease-out forwards;
}

@keyframes fadeCellIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
