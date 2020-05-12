<template>
	<ul class="tag-list">
		<slot />
	</ul>
</template>

<style lang="scss" scoped>
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    font-size: .9rem;
  }
</style>
