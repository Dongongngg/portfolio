module.exports = {
  siteMetadata: {
    title: `Jingfu's portfolio`,
    description: `Hello! My name is Jingfu Dong, welcome to my portfolio site. I'm looking for job, you can download my resume.`,
    author: `Jingfu Dong`,
    projects: [
      {
        id: `1`,
        title: `Teacher Test`,
        github_url: `https://github.com/Dongongngg/eduf3037-game`,
        netlify_url: `https://eduf3037-game.netlify.app/`,
        description: `React application for a University educational course. There will be 5 scenarios and questions given to players in order to test if they are creative teachers:)`,
        img: `img/projects/eduf3037/test.png`,
        skills: `React | SASS | JavaScript`,
      },
      {
        id: `2`,
        title: `My Portfolio`,
        github_url: `https://github.com/Dongongngg/portfolio`,
        netlify_url: `https://jingfudong.com`,
        description: `Try Graphql, Gatsby and Netlify deployment for the first time.`,
        img: `img/projects/portfolio/landing.png`,
        skills: `Gatsby | React | Bootstrap | SASS | Graphql`,
      },
      {
        id: `3`,
        title: `COVID-19 stats`,
        github_url: `https://github.com/Dongongngg/covid19-au-stats`,
        netlify_url: `https://covid-19-au.netlify.app/`,
        description: `Fetch and display daily COVID19 stats from API (Don't have a valid API for each state)`,
        img: `img/projects/covid19-au-stats/overall.png`,
        skills: `React | Material UI | SASS`,
      },
      {
        id: `4`,
        title: `To do list - MERN`,
        github_url: `https://github.com/Dongongngg/mern-todolist`,
        netlify_url: `https://afternoon-inlet-07962.herokuapp.com/`,
        description: `Full-stack application with standard functionality of to do list. \
        A practice of using MongoDB-Express-React-Node stack. Deployed on Heroku.`,
        img: `img/projects/todo-list-mern/newtodo.png`,
        skills: `React | Bootstrap | SASS | Express | Node | MongoDB`,
      },
    ],
  },
  pathPrefix: `/portfolio/public`,
};
