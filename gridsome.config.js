module.exports = {
  siteName: 'Josh Collinsworth',
  siteDescription: 'Code, design and blog from Josh Collinsworth',

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://joshcollinsworth.com', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        downloadACFImages: true, // default false
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/projects/*.md',
        typeName: 'project',
        remark: {

        }
      }
    }
  ],
  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds route for "post_tag" post type (Optional)
    project: [
      {
        path: '/projects/:title',
        component: './src/templates/Project.vue'
      }
    ]
  }
}
