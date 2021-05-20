// Cloning single branch: 
// git clone --single-branch --branch <branchname> <remote-repo>

// You must run two commands: git submodule init to initialize your local configuration file, and git submodule update to fetch all the data from that project and check out the appropriate commit listed in your superproject.

// git submodule init
// git submodule update
// git submodule add <url-repo> <folder>

// then you can follow normally

// git add .
// git commit -m 'message'
// git push

const backEndProjects = ['sd-08-mongodb-aggregations', 'sd-08-mongodb-commerce', 'sd-08-mongodb-dataflights', 'sd-08-mysql-one-for-all', 'sd-08-mysql-all-for-one' , 'sd-08-mysql-vocabulary-booster'];

const frontEndProjects = ['sd-08-project-facebook-signup', 'sd-08-project-frontend-online-store', 'sd-08-project-movie-cards-library', 'sd-08-project-movie-cards-library-crud', 'sd-08-project-movie-cards-library-stateful', 'sd-08-project-react-testing-library', 'sd-08-project-recipes-app', 'sd-08-project-shopping-cart', 'sd-08-project-starwars-planets-search', 'sd-08-project-trivia-react-redux', 'sd-08-project-trybewallet']

const fundamentsProjects = ['sd-08-project-jest', 'sd-08-project-js-unit-tests', 'sd-08-project-lessons-learned', 'sd-08-project-pixels-art', 'sd-08-project-playground-function', 'sd-08-project-todo-list', 'sd-08-project-zoo-function']

const otherProjects = ['sd-08-project-color-guess', 'sd-08-project-mistery-letter', 'sd-08-project-meme-generate']

const allProjects = [ 
{project: 'sd-08-project-color-guess', branchName: ''},
{project: 'sd-08-project-mistery-letter', branchName: ''},
{project: 'sd-08-project-meme-generate', branchName: ''},
{project: 'sd-08-project-facebook-signup', branchName: ''},
{project: 'sd-08-project-frontend-online-store', branchName: 'main-group-10'},
{project: 'sd-08-project-movie-cards-library', branchName: 'JRGCast-project-movie-cards-library'},
{project: 'sd-08-project-movie-cards-library-crud', branchName: 'JRGCast-movie-cards-library-crud'},
{project: 'sd-08-project-movie-cards-library-stateful', branchName: 'JRGCast-project-movie-library-stateful'},
{project: 'sd-08-project-react-testing-library', branchName: 'JRGCast-react-resting-library'},
{project: 'sd-08-project-recipes-app', branchName: 'main-group-8'},
{project: 'sd-08-project-shopping-cart', branchName: 'JRGCast-project-shopping-cart'},
{project: 'sd-08-project-starwars-planets-search', branchName: 'JRGCast-star-wars-planets-search'},
{project: 'sd-08-project-trivia-react-redux', branchName: 'main-group-18'},
{project: 'sd-08-project-trybewallet', branchName: 'JRGCast-refazendo-do-jeito-certo'},
{project: 'sd-08-project-jest', branchName: 'JRGCast-jest-project'},
{project: 'sd-08-project-js-unit-tests', branchName: 'JRGCast-project-js-unit-tests'},
{project: 'sd-08-project-lessons-learned', branchName: 'JRGCast-myFirstProject'},
{project: 'sd-08-project-pixels-art', branchName: 'JRGCast-projeto-pixel-art'},
{project: 'sd-08-project-playground-function', branchName: 'JRGCast-projeto-playground-function'},
{project: 'sd-08-project-todo-list', branchName: 'JRGCast-project-todo'},
{project: 'sd-08-project-zoo-function', branchName: 'JRGCast-project-zoo-funcion'}];

const filterFunc = (array, filterArr) => array.filter(element => filterArr.some(projectName => element.project.includes(projectName)))

const projectFundamentos = filterFunc(allProjects, fundamentsProjects)

console.log(projectFundamentos)

const printCommand = (myBranch, repoUrl) => console.log(`git clone --single-branch -b ${myBranch} https://github.com/tryber/${repoUrl}; git submodule add https://github.com/tryber/${repoUrl} ${repoUrl}`);

const settingSail = projectFundamentos.forEach(({project, branchName}) => printCommand( branchName, project))
