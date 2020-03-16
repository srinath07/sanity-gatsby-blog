export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6f4929b6f808d08dacd3ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tws6457n',
                  apiId: 'bd8b0dde-a032-44ce-ab32-c91ef1d7dd3b'
                },
                {
                  buildHookId: '5e6f4929f8f3c8ab79115a4c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-43fwkm94',
                  apiId: '10f49d1c-9b51-415b-b08d-3d8318b2f513'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srinath07/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-43fwkm94.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
