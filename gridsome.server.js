module.exports = function(api) {
  api.loadSource(actions => {

    const categories = actions.addCollection({
      typeName: 'category'
    })

    const allPosts = actions.getCollection('post')._collection.data
    let allPostsCategories = []

    allPosts.forEach(post => allPostsCategories.push(...post.categories))

    const uniqueCategories = new Set(allPostsCategories)

    uniqueCategories.forEach((category) => {
      categories.addNode({
        title: category,
        posts: allPosts.filter(post => post.categories.includes(category))
      })
    })
  })
}
