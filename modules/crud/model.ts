
import {Request,Response} from "express" ;
import {UserInstance,UserModel} from "../../models/schema";
import {requestData} from './schema';



const testUser:any= async(req:Request,res:Response)=>{
    console.log("test success")
    return ({data:"test page"})
}

const createUser:any = async (req:requestData,res:Response)=>{
    
const findemail = await UserModel.findOne({
    where: {
        email:req.email,
    }
});
console.log("email  "  + findemail?.email)
if(findemail){
    return false

}else{
    const createData = await UserModel.create(
        {
        name:req.name,
        email:req.email,
        product:req.product,
        product_qty:req.product_qty
    });
     if(createData){
        console.log("inserted") ;
        return createData
     } else{
        return false
     }
    } 
 }


const readUser:any = async (req:Request,res:Response) => {

    const userData = await UserModel.findAll({attributes:[ "id","name","email","product","product_qty"]});

    if(userData)return userData; 
    else{
        return false;
    }
}


const updateUser:any = async (req:requestData,res:Response) => {

    // let item:UserInstance=req; 

    const updateData = await UserModel.update(
        {name:req.name,
        product:req.product,
        Product:req.product_qty}
    ,{
        where: {
            email: req.email,
        }

    });

    if(updateData){
        console.log("update")
        return updateData
        
    }else{
        return false;
    }
}

const deleteUser:any = async (req:requestData,res:Response) => {


    const deleteData= await UserModel.destroy({where:{name:req.name}})

    console.log(deleteData)
    if(deleteData){
        console.log("delete")
        return deleteData;    
    }else{
        return false;
    }

}



export {
    testUser,createUser,readUser ,updateUser , deleteUser
}