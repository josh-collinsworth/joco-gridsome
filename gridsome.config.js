module.exports = {
  siteName: 'Josh Collinsworth',
  siteDescription: 'Front-end developer. Code, design, and blog.',
  siteUrl: 'https://joshcollinsworth.com',

  pages: ['About', 'Projects', 'Blog', 'Contact', 'Uses'], //Controls what shows in the main nav

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://api.joshcollinsworth.com', // required
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
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './src/posts',
        typeName: 'post',
        pathPrefix: '/blog',
        template: './src/templates/post.vue'
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
    project: [
      {
        path: '/projects/:title',
        component: 'src/templates/single_project.vue'
      }
    ],
  }
}
