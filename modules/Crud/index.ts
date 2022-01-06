
const service = require('./model.ts');


module.exports = function (app){
    app.post('/create/user',service.create),
    app.get('/read/users',service.read),  
    
    app.put('/update/user',service.update),
    app.delete('/delete/user',service.deletedata)
}

