module.exports = {
  plugins: [`gatsby-plugin-sass`],
  siteMetadata: {
    title: `Jingfu's portfolio`,
    description: `Hello! My name is Jingfu Dong, welcome to my portfolio site. I'm looking for an opportunity in web development, you can download my resume.`,
    author: `Jingfu Dong`,
    projects: [
      {
        id: 1,
        title: `Ad word configurator`,
        github_url: `https://github.com/Dongongngg/ad-words-test`,
        description: `Code challenge I did for a marketing company. Full-stack app that allow users to store keywords/sites and settings which pre-populated from previous opertaion.`,
        img: `img/projects/code-test/ad-word.png`,
        skills: [
          "React,",
          "Material UI,",
          "Express,",
          "Sequelize,",
          "NodeJS,",
          "MySQL Server,",
          "Docker,",
          "REST api"
        ]
      },
      {
        id: 2,
        title: `Job-list (MERN)`,
        github_url: `https://github.com/Dongongngg/job-listing`,
        netlify_url: `https://aqueous-dawn-60527.herokuapp.com/`,
        description: `Full-stack application that allows users to signin/signup, CRUD and filter job applications.`,
        img: `img/projects/job-listing/job-listing.png`,
        skills: [
          "NodeJS,",
          "Express,",
          "React,",
          "Mongoose,",
          "MongoDB,",
          "JWT,",
          "REST api"
        ]
      },
      {
        id: 3,
        title: `Minesweeper Clone`,
        github_url: `https://github.com/Dongongngg/minesweeper`,
        netlify_url: `https://cocky-meninsky-1cd43d.netlify.app/`,
        description: `A clone of Windows classic game minesweeper using TypeScript + React.`,
        img: `img/projects/minesweeper/minesweeper.png`,
        skills: ["React,", "TypeScript,", "SASS"]
      },
      {
        id: 4,
        title: `My Portfolio`,
        github_url: `https://github.com/Dongongngg/portfolio`,
        netlify_url: `https://jingfudong.com`,
        description: `Graphql, Gatsby and Netlify deployment. Trying to make it clear.`,
        img: `img/projects/portfolio/landing.png`,
        skills: ["Gatsby,", "React,", "Bootstrap,", "SASS,", "Graphql"]
      },
      {
        id: 5,
        title: `Storytelling Game`,
        github_url: `https://github.com/Dongongngg/eduf3037-game`,
        netlify_url: `https://eduf3037-game.netlify.app/`,
        description: `Storytelling game I made for an assignment of an university's teaching course. It scores 58/60.`,
        img: `img/projects/eduf3037/test.png`,
        skills: ["React,", "SASS"]
      }
    ],
    works: [
      {
        id: 1,
        title: `Full-stack developer intern`,
        company: `iShare Incubator`,
        location: `Wynyard`,
        responsibility: [
          `Working within a team to build property management web application`,
          `Creating functional page and components, coding correlative front-end and back-end`,
          `Optimizating business processes`
        ],
        date: `May 2020 - Aug 2020`
      },
      {
        id: 2,
        title: `Front-end developer intern`,
        company: `Netstripes`,
        location: `Pyrmont`,
        responsibility: [
          `Assisting WordPress theme development based on designs`,
          `Administrating integrations with other platforms, managing website’s plugins`,
          `Contribution of digital transformation solutions`,
          `General IT troubleshooting`
        ],
        date: `Oct 2018 - Jan 2019`
      }
    ]
  },
  pathPrefix: `/portfolio/public`
};
