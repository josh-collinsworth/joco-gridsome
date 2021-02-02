module.exports = function(api) {
  api.loadSource(actions => {

    const categories = actions.addCollection({
      typeName: 'category'
    })

    const allPosts = actions.getCollection('post')._collection.data

    let allPostsCategories = []

    allPosts.forEach(post => allPostsCategories.push(...post.categories))

    const allCategories = new Set(allPostsCategories)

    allCategories.forEach((category, index) => {
      categories.addNode({
        title: category,
        id: index,
        posts: allPosts.filter(post => post.categories.includes(category))
      })
    })
  })
}
