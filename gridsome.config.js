module.exports = {
  siteName: 'Josh Collinsworth',
  siteDescription: 'Front-end developer. Code, design, and blog.',
  siteUrl: 'https://joshcollinsworth.com',

  pages: ['About', 'Projects', 'Blog', 'Contact', 'Uses'], //Controls what shows in the main nav

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://api.joshcollinsworth.com', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100,
        concurrent: 20
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/projects/*.md',
        typeName: 'project',
        remark: {
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-61693930-1'
      }
    }

  ],
  //Required to make relative image paths work (unfortunately)
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds route for "post_tag" post type (Optional)
    project: [
      {
        path: '/projects/:title',
        component: 'src/templates/single_project.vue'
      }
    ]
  }
}
