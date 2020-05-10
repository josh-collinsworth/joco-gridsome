<template>
  <div id="grid" aria-hidden="true">
		<template v-for="cell in count">
			<GridCell :color="randomColor()" :size="randomSize()" :key="cell" />
		</template>
	</div>
</template>


<script>
import GridCell from './GridCell'

export default {
	components: { GridCell },
	data: () => ({
		count: 0,
		colors: [
			'var(--paper)',
			'var(--lightGray)',
			'var(--darkGray)',
			'var(--lightBlue)',
			'var(--darkBlue)',
			'var(--yellow)',
			'var(--orange)',
		]
	}),
	mounted() {
		this.count = Math.floor(
			(window.innerWidth /
				(parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')) / 1.75) *
				3
			)
		)
	},
	methods: {
		randomSize() {
			const cellSize = Math.random()
			if (cellSize > 0.85) {
				return 3
			} else if (cellSize > 0.6) {
				return 2
			}
			return 1
		},
		randomColor() {
			const color = Math.floor(Math.random() * 7)
			const percent = Math.floor(Math.random() * 100)

			if(percent > 50) {
				return this.colors[color]
			}

			return this.colors[0]
		}
	}
}
</script>


<style lang="scss" scoped>
#grid {
	display: grid;
	overflow: hidden;
	height: 3rem;
	grid-template-columns: repeat(auto-fill, minmax(.75rem, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(.75rem, 1fr));
	grid-auto-flow: dense;
	margin-bottom: 4rem;

	.cell {
		padding: 50% 0;
	}
}
</style>
