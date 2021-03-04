const container = require("./api/container");

const application = container.resolve("app");

application.start();