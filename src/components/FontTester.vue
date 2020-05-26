<template>
	<form class="tester-form" @submit.prevent="">
		<div class="flex-container">
			<label :for="`${fontName}`" class="sr">{{ fontName }}</label>
			<input :id="`${fontName}`" type="text" @click="select" v-model="text" :style="{ fontFamily: font, fontSize: sizeInPx, fontStyle, fontWeight }" />
		</div>
		<div>
			<label :for="`${fontName}-size`" class="sr">Font size:</label>
			<input :id="`${fontName}-size`" type="range" v-model="size" min="8" max="127" />
		</div>
		<p v-if="link" class="details">
			<xa :to="link">{{ font }} family</xa>
		</p>
	</form>
</template>


<script>
export default {
	props: {
		font: {
			type: String,
			required: true
		},
		label: String,
		fontStyle: {
			type: String,
			default: 'normal'
		},
		fontWeight: {
			type: String,
			default: 'normal'
		},
		placeholder: {
			type: String,
		},
		link: {
			type: String,
			default: ''
		}
	},
	data: () => ({
		size: 42,
		text: ''
	}),
	created() {
		this.text = (this.label || this.font)
	},
	methods: {
		select(e) {
			e.target.select()
		}
	},
	computed: {
		sizeInPx() {
			return this.size + "px"
		},
		fontName() {
			return (this.label || this.font)
		}
	}
}
</script>


<style lang="scss">
.tester-form {
	overflow: visible;
	margin: 3rem 0 0;
	position: relative;

	label {
		font-size: .8rem;
		flex: 1 1 14em;
		color: var(--lightGray);
		margin-top: .5rem;
	}

	input[type="range"] {
		flex: 1 1 70%;
		padding: 0;
		margin: .5rem 0 0;
		max-width: 12rem;
		outline: none;
		border: none;
	}

	input[type=text] {
		border: none;
		margin: 0;
		padding: .6em 0;
		width: 100vw;
		line-height: 1em;
		height: 1em;
		overflow: visible;
		position: absolute;

		&:hover {
			cursor: text;
		}
	}

	.flex-container {
		padding-top: 2rem;
		display: flex;
		align-items: flex-end;
		align-content: flex-end;
		position: relative;
	}
}
</style>
