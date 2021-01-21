module.exports = {
  siteName: 'Josh Collinsworth',
  siteDescription: 'Front-end developer. Code, design, and blog.',
  siteUrl: 'https://joshcollinsworth.com',

  pages: ['About', 'Projects', 'Blog', 'Contact', 'Uses'], //Controls what shows in the main nav

  plugins: [
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
        ignore: ['drafts/*.md'],
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
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'post',
        feedOptions: {
          title: 'Josh Collinsworth',
          feed_url: 'https://joshcollinsworth.com/rss.xml',
          site_url: 'https://joshcollinsworth.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.excerpt,
          url: 'https://joshcollinsworth.com/blog/' + node.slug,
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
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
