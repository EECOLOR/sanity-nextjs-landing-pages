export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cd525f8b65565dd81a9b6c7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k4wzu6ah',
                  apiId: 'bcb52e9f-1056-4fd8-8163-0b5b0e1cc749'
                },
                {
                  buildHookId: '5cd525f8e770acd8bb00aac2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ehy5xmzw',
                  apiId: '1195724a-9cf5-4f62-905c-5d786de175c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EECOLOR/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ehy5xmzw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
