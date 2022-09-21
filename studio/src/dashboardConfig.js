export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "632acea7171ca2493ac815ad",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-23w1i9q8",
                  apiId: "96004166-5117-405d-9ebd-3beb52235f89",
                },
                {
                  buildHookId: "632acea741a3b90071e5292c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-o1ardpuz",
                  apiId: "5afcd84a-5510-4900-8a3a-93db4b654621",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Victor11-leo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-o1ardpuz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
