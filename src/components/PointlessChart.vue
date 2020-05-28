<template>
	<ul class="pointless-chart">
		<div class="x-label" aria-hidden="true">Enjoyment</div>
		<div class="y-label" aria-hidden="true">Expertise</div>
		<div class="horizontal-line"></div>
		<div class="vertical-line"></div>
		<li
			v-for="item in chartItems"
			class="chart-item"
			:style="{
				background: item.color,
				left: `calc(${item.x}% - (.75em / 100 * ${item.x}))`,
				bottom: `calc(${item.y}% - (.75em / 100 * ${item.y}))`
			}"
			:key="item.name"
		>
			<span>
				{{ item.name }}
				<span class="sr">
					Enjoyment: {{ item.y }}%; expertise: {{ item.x }}%.
				</span>
			</span>
		</li>
	</ul>
</template>


<script>
export default {
	data: () => ({
		chartItems: [
			{ name: "Vue", x: 83, y: 85, color: '#4fc08d' },
			{ name: "Svelte", x: 64, y: 94, color: '#ff3e00' },
			{ name: "HTML", x: 84, y: 30, color: '#d45632' },
			{ name: "CSS", x: 90, y: 91, color: '#264de4' },
			{ name: "JavaScript", x: 78, y: 67, color: '#f0db4f' },
			{ name: "WordPress", x: 85, y: 57, color: '#21759b' },
			{ name: "React", x: 56, y: 52, color: '#81d9f7' },
			{ name: "PHP", x: 43, y: 36, color: '#777bb3' },
			{ name: "Nuxt", x: 53, y: 72, color: '#374759' },
			{ name: "Gridsome", x: 69, y: 79, color: '00a672' },
			{ name: "Ruby", x: 39, y: 44, color: '#cc342d' },
			{ name: "Rails", x: 47, y: 28, color: '#cc0000' },
			{ name: "Node", x: 16, y: 25, color: '#8bc500' },
			{ name: "Git", x: 50, y: 44, color: '#f04f33' },
			{ name: "MySQL", x: 39, y: 12, color: '#005f89' },
			{ name: "Serverless", x: 24, y: 45, color: '#37aeb8' },
			{ name: "Accessibility", x: 60, y: 61 },
			{ name: "RegEx", x: 73, y: 40 },
			{ name: "Performance", x: 78, y: 50 },
			{ name: "GraphQL", x: 32, y: 65, color: '#37aeb8' },
		]
	})
}
</script>


<style lang="scss" scoped>
.pointless-chart {
	padding: 0;
	position: relative;
	width: calc(100% - 2rem);
	height: 400px;
	border: 1px solid var(--lightGray);
	margin: 4rem 0 2rem 2rem;
	overflow: visible;

	.horizontal-line,
	.vertical-line {
		position: absolute;
		top: 0;
		left: 0;
		height: 200px;
		width: 100%;
		border-bottom: 1px dashed #ddd;
		z-index: 0;
	}

	.vertical-line {
		width: 50%;
		border-right: 1px dashed #ddd;
		border-bottom: 0;
		height: 400px;
	}

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
		z-index: 1;
		font-size: .8rem;
		font-style: italic;
		transition: all .2s;
		opacity: .8;
		margin: 0;

		span {
			opacity: .5;
			transition: inherit;
			position: absolute;
			right: calc(100% + .375em);
		}

		&:hover {
			text-shadow: 0 0 2em var(--white);
			opacity: 1;

			span  {
				opacity: 1;
			}
		}
	}
}
</style>
