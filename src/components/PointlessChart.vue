<template>
	<div class="pointless-chart">
		<div class="x-label">Enjoyment</div>
		<div class="y-label">Expertise</div>
		<div
			v-for="item in chartItems"
			class="chart-item"
			:style="{
				background: item.color,
				left: `calc(${item.x}% - (.5em / 100 * ${item.x}))`,
				bottom: `calc(${item.y}% - (.5em / 100 * ${item.y}))`
			}"
			:key="item.name"
		>
			<span>{{ item.name }}</span>
		</div>
	</div>
</template>


<script>
export default {
	data: () => ({
		chartItems:
		// [
		// 	{ name: 'Vue', x: 83, y: 85 },
		// 	{ name: 'Svelte', x: 70, y: 90 },
		// 	{ name: 'HTML', x: 82, y: 48 },
		// 	{ name: 'CSS', x: 91, y: 90 },
		// 	{ name: 'SCSS', x: 82, y: 89 },
		// 	{ name: 'JavaScript', x: 82, y: 74 },
		// 	{ name: 'WordPress', x: 87, y: 62 },
		// 	{ name: 'React', x: 60, y: 60 },
		// 	{ name: 'PHP', x: 50, y: 50 },
		// 	{ name: 'Nuxt', x: 62, y: 85 },
		// 	{ name: 'Gridsome', x: 79, y: 81 },
		// 	{ name: 'Ruby', x: 49, y: 55 },
		// 	{ name: 'Rails', x: 55, y: 45 },
		// 	{ name: 'Node', x: 20, y: 50 },
		// 	{ name: 'Serverless', x: 25, y: 57 },
		// 	{ name: 'Accessibility', x: 63, y: 67 },
		// 	{ name: 'Performance', x: 84, y: 56 },
		// 	{ name: 'Bottom', x: 0, y: 0 },
		// 	{ name: 'Top', x: 100, y: 100 },
		// ]
		[
			{ name: "Vue", x: 78, y: 85, color: '#4fc08d' },
			{ name: "Svelte", x: 64, y: 92, color: '#ff3e00' },
			{ name: "HTML", x: 84, y: 30, color: '#d45632' },
			{ name: "CSS", x: 89, y: 88, color: '#264de4' },
			{ name: "JavaScript", x: 78, y: 67, color: '#f0db4f' },
			{ name: "WordPress", x: 85, y: 57, color: '#21759b' },
			{ name: "React", x: 52, y: 51, color: '#81d9f7' },
			{ name: "PHP", x: 43, y: 37, color: '#777bb3' },
			{ name: "Nuxt", x: 55, y: 72, color: '#374759' },
			{ name: "Gridsome", x: 69, y: 78, color: '00a672' },
			{ name: "Ruby", x: 39, y: 44, color: '#cc342d' },
			{ name: "Rails", x: 46, y: 30, color: '#cc0000' },
			{ name: "Node", x: 16, y: 25, color: '#8bc500' },
			{ name: "Git", x: 48, y: 44, color: '#f04f33' },
			{ name: "Serverless", x: 24, y: 45, color: '#37aeb8' },
			{ name: "Accessibility", x: 60, y: 59 },
			{ name: "Performance", x: 76, y: 42 },
			{ name: "GraphQL", x: 32, y: 65, color: '#37aeb8' },
		]
	})
}
</script>


<style lang="scss" scoped>
.pointless-chart {
	position: relative;
	width: calc(100% - 2rem);
	height: 400px;
	border: 1px solid var(--lightGray);
	margin: 4rem 0 2rem 2rem;

	.y-label, .x-label {
		position: absolute;
		text-align: center;
		color: var(--lightGray);
	}

	.y-label {
		width: 100%;
		top: -2rem;
		left: 0;
	}

	.x-label {
		width: 400px;
		top: 400px;
		left: -2rem;
		transform: rotate(-90deg);
		transform-origin: top left;
	}

	.chart-item {
		width: .75em;
		height: .75em;
		border-radius: .75em;
		background: var(--ink);
		display: flex;
		align-items: center;
		position: absolute;
		font-size: .8rem;
		font-style: italic;
		transition: all .2s;
		opacity: .8;

		span {
			opacity: .3;
			transition: inherit;
			position: absolute;
			right: calc(100% + .375em);
		}

		&:hover {
			/* transform: scale(1.1); */
			text-shadow: 0 0 2em var(--lightBlue);
			opacity: 1;

			span  {
				opacity: 1;
			}
		}
	}
}
</style>
