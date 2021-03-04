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

module.exports = container;