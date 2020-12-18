<template>
  <div class="cell-grid" aria-hidden="true">
		<template v-for="cell in count">
			<GridCell :color="randomColor()" :key="cell" />
		</template>
	</div>
</template>


<script>
import GridCell from './GridCell'

export default {
	components: { GridCell },
	props: {
		density: {
			required: false,
			type: Number,
			default: 42,
			validator: value => {
				return value >= 0 && value <= 100
			}
		}
	},
	data: () => ({
		count: 0,
		colors: [
			'transparent',
			'var(--lightGray)',
			'var(--ink)',
			'var(--lightBlue)',
			'var(--darkBlue)',
			'var(--yellow)',
			'var(--orange)',
		]
	}),
	mounted() {
		if(typeof window == 'undefined') return
		this.count = Math.floor(
			(window.innerWidth /
			(parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')) / 0.65) *
			4)
		)
	},
	methods: {
		randomColor() {
			const color = Math.floor(Math.random() * 7)
			const percent = Math.floor(Math.random() * 100)

			if(percent < this.density) {
				return this.colors[color]
			}

			return this.colors[0]
		}
	}
}
</script>


<style lang="scss" scoped>
.cell-grid {
	display: grid;
	height: 2.5rem;
	grid-template-columns: repeat(auto-fill, minmax(.5rem, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(.5rem, 1fr));
	grid-auto-flow: dense;
	position: relative;
	z-index: 2;

	.cell {
		padding: 50% 0;
	}
}
</style>
