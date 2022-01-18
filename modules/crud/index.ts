import { test,create,read,update,deletedata} from "./service"


const User_route =  (app:any)=>{    

    app.get("/test",test),
    
    app.post('/create/user',create)

    app.get('/read/users',read)  

    app.put('/update/user',update)

    app.delete('/delete/user',deletedata);

}

export default User_route