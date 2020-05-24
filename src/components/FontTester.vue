<template>
	<form class="tester-form" @submit.prevent="">
		<div class="flex-container">
			<label :for="`${fontName}-size`">Size:</label>
			<input :id="`${fontName}-size`" type="range" v-model="size" min="8" max="127" />
		</div>
		<input type="text" @click="select" v-model="text" :style="{ fontFamily: font, fontSize: sizeInPx, fontStyle, fontWeight }" />
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
	margin-bottom: 2rem;
	overflow: visible;

	.flex-container {
		display: flex;
		align-items: center;
	}

	label {
		font-size: .8rem;
		flex: 1 1 14em;
		font-weight: bold;
		color: var(--lightGray)
	}

	input[type="range"] {
		flex: 1 1 70%;
		padding: 0;
	}

	input[type=text] {
		border: none;
		padding: 0 0 .5rem 0;
		min-height: 96px;
		width: 100vw;
		overflow: visible;
	}
}
</style>
