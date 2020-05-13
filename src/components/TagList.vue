<template>
	<ul class="tag-list">
		<slot />
	</ul>
</template>

<style lang="scss" scoped>
  .tag-list {
    display: flex;
    list-style-type: none;
    padding: 0;
    font-size: .9rem;
  }
</style>
