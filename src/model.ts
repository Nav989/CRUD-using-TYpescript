
import {Request,Response} from "express" ;
import {UserInstance,UserModel} from "../models/schema";


const test= async(req:Request,res:Response)=>{
    console.log("test success")
    res.json({data:"test page"})
}

const create = async (req:Request,res:Response)=>{
   console.log('1');

let name = req.body.name;
  let email = req.body.email;
  let product = req.body.product;
  let product_qty = req.body.product_qty;
    const createData = await UserModel.create({name,email,product,product_qty
});

    // await createData.save()
     if(createData){
        res.status(201).send(createData);
       console.log("inserted") 
     } else{
        res.status(400).send({message: "error"})
     }
}




const read = async (req:Request,res:Response) => {

    // const users = await Users.query("SELECT * FROM `crudtables`", { type: QueryTypes.SELECT });

    const userData = await UserModel.findAll({attributes:[ "id","name","email","product","product_qty"]});


    if(userData)res.status(200).send(userData); 
    res.status(400).send({message: "error"})
}


const update = async (req:Request,res:Response) => {

    const updateData = await UserModel.update({
        name: req.body.name,
        product:req.body.product,
        product_qty:req.body.product_qty,
        
    },{
        where: {
            email: req.body.email,
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

    const deleteData= await UserModel.destroy({where:{name:req.body.name}})

    console.log(deleteData)
    if(deleteData){
        console.log("delete")
        res.status(200).sendStatus(deleteData);    
    }else{
        res.status(400).send({message: "not deleted"})
    }

}



export {
    test,create,read ,update , deletedata
}