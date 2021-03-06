const {asClass,asFunction,createContainer,asValue} = require("awilix");

//App Start
const Startup = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const Router = require("./routes");

//Routes
const TestRoutes = require("./routes/test.route");

//Controllers
const {TestController} = require('./controllers')

//Services
const {TestService} = require('../services');

//Business
const {TestBusiness} = require('../domain')

//Repository
const {TestRepository} = require('../dal/repository')


const container = createContainer();

container
    .register({
        //Things that you need when you start tha app
        app: asClass(Startup).singleton(),
        server: asClass(Server).singleton(),
        config: asValue(config),
        router: asFunction(Router).singleton()
    })
    .register({
        //Roues
        testRoutes : asFunction(TestRoutes).singleton()
    })
    .register({
        /*Controllers */
        testController: asClass(TestController).singleton()
    })
    .register({
        /*Services */
        testService: asClass(TestService).singleton()
    })
    .register({
        /*Business */
        testBusiness : asClass(TestBusiness).singleton()
    })
    .register({
        /*Repository */
        testRepository: asClass(TestRepository).singleton()
    })
    .register({
        db: asValue(db)
    })

module.exports = container;