# gatsby-source-contentful bug
1. `npm install`
2. `gatsby develop`
3. Go to http://localhost:8000 and you will see 3 brands with some products underneath each brand.
4. Change the name of any brand from Contentful site.
5. stop the development server.
6. rebuild using `gatsby develop` so that gatsby refetch the content from Contentful.
7. You will find there are no products for the brand which its name was changed.
