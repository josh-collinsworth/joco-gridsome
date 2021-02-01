module.exports = function(api) {
  api.loadSource(actions => {

    const categories = actions.addCollection({
      typeName: 'category'
    })

    const allPosts = actions.getCollection('post')._collection.data

    const allCategories = new Set(allPosts.flatMap(post => post.categories))

    allCategories.forEach((category, index) => {
      categories.addNode({
        title: category,
        id: index,
        posts: allPosts.filter(post => post.categories.includes(category))
      })
    })
  })
}
