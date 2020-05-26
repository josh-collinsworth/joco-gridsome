<template>
  <div id="loader">
		<div class="sr">Loading…</div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
</template>


<script>
export default {
	props: {
	},
	components: {
	}
}
</script>


<style lang="scss" scoped>
#loader {
	display: flex;
	margin: 1rem 0;

	.dot {
		width: 1rem;
		height: 1rem;
		background: var(--lightBlue);
		margin-right: .5rem;
		animation: load-pulse .5s ease-in infinite;

		& + .dot {
			background: var(--yellow);
			animation-delay: .1s;

			& + .dot {
				background: var(--darkBlue);
				margin-right: 0;
				animation-delay: .2s;
			}
		}
	}
}

@keyframes load-pulse {
	0% {
		transform: scale(1.2);
	}
	20% {
		transform: scale(1);
	}
	40% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
}
</style>
