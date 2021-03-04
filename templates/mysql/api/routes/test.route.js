const {Router} = require("express");

const TestRouter = function({testController}){
    const router = Router();

    /*Here you need to write your routes about your entity  like /getAll,/find/id,etc */
    router.get('/',testController.verifyTest.bind(testController));

    return router;
}

module.exports = TestRouter;