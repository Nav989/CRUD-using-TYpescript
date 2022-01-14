
import {Request,Response} from "express" ;
import {UserInstance,UserModel} from "../models/schema";


const test= async(req:Request,res:Response)=>{
    console.log("test success")
    res.json({data:"test page"})
}

const create = async (req:Request,res:Response)=>{
   console.log('1');
let item:UserInstance=req.body;
const findemail = await UserModel.findOne({
    where: {
        email:item.email,
    }
});
console.log("email  "  + findemail?.email)
if(findemail){
    res.status(400).send({message: "email already present"})

}else{
    const createData = await UserModel.create(item);

     if(createData){
        res.status(201).send(createData);
       console.log("inserted") 
     } else{
        res.status(400).send({message: "error"})
     }
    } 
 }




const read = async (req:Request,res:Response) => {

    const userData = await UserModel.findAll({attributes:[ "id","name","email","product","product_qty"]});

    if(userData)res.status(200).send(userData); 
    else{
        res.status(400).send({message: "error"});
    }
}


const update = async (req:Request,res:Response) => {

    let item:UserInstance=req.body;

    const updateData = await UserModel.update(item
        // {name:item.name,
        // product:item.product,
        // Product:item.product_qty}
    ,{
        where: {
            email: item.email,
        }

    });

    if(updateData){
        console.log("update")
        res.status(200).send(updateData);
        
    }else{
        res.status(400).send({message: "not update"})
    }
}

const deletedata = async (req:Request,res:Response) => {

    let item:UserInstance=req.body;

    const deleteData= await UserModel.destroy({where:{name:item.name}})

    console.log(deleteData)
    if(deleteData){
        console.log("delete")
        res.status(200).json(deleteData);    
    }else{
        res.status(400).json({message: "not deleted"})
    }

}

export {
    test,create,read ,update , deletedata
}
