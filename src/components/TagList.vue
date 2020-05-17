<template>
	<ul class="tag-list">
		<slot />
	</ul>
</template>

<style lang="scss" scoped>
  .tag-list {
    display: flex;
    list-style-type: none;
    margin-top: 1rem;
    padding: 0;
    font-size: .9rem;
  }
</style>
