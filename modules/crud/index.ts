import { create, test , read , update , deletedata} from "./model"


const User_route =  (app:any)=>{    

    app.get("/test",test),
    
    app.post('/create/user',create),

    app.get('/read/users',read),  

    app.put('/update/user',update),

    app.delete('/delete/user',deletedata)

}

export default User_route