const backEndProjects = ['sd-08-mongodb-aggregations', 'sd-08-mongodb-commerce', 'sd-08-mongodb-dataflights', 'sd-08-mysql-one-for-all', 'sd-08-mysql-all-for-one' , 'sd-08-mysql-vocabulary-booster'];

const frontEndProjects = ['sd-08-project-facebook-signup', 'sd-08-project-frontend-online-store', 'sd-08-project-movie-cards-library', 'sd-08-project-movie-cards-library-crud', 'sd-08-project-movie-cards-library-stateful', 'sd-08-project-react-testing-library', 'sd-08-project-recipes-app', 'sd-08-project-shopping-cart', 'sd-08-project-starwars-planets-search', 'sd-08-project-trivia-react-redux', 'sd-08-project-trybewallet']

const fundamentsProjects = ['sd-08-project-jest', 'sd-08-project-js-unit-tests', 'sd-08-project-lessons-learned', 'sd-08-project-pixels-art', 'sd-08-project-playground-function', 'sd-08-project-todo-list', 'sd-08-project-zoo-function']

const otherProjects = ['sd-08-project-color-guess', 'sd-08-project-mistery-letter', 'sd-08-project-meme-generate']

const containsProject = [];

const pushCP = (array) => {
  array.forEach((currVal) => {
   containsProject.push(currVal.includes('project') ? {project: currVal, branchName: ''} : false)
  })
}

pushCP(otherProjects);
pushCP(frontEndProjects);
pushCP(fundamentsProjects);

console.log(containsProject)

// sd-08-calculator Internal


// sd-08-live-lectures


           