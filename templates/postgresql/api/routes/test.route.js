const {Router} = require("express");

const TestRouter = function({testController}){
    const router = Router();

    /*Here you need to write your routes about your entity  like /getAll,/find/id,etc */
    router.get('/verifyTest',testController.verifyTest.bind(testController));
    router.get('/',testController.getMessages.bind(testController));
    router.post('/',testController.writeMessage.bind(testController));
    router.delete('/:id',testController.deleteMessage.bind(testController));
    router.put('/:id',testController.updateMessage.bind(testController));
    router.get('/:id',testController.getMessage.bind(testController));

    return router;
}

module.exports = TestRouter;