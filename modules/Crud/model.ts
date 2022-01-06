
const database = require('../../database/mysql.ts');

const Users = database.user;

const { QueryTypes } = require('sequelize');


const create = async (req, res) => {

    const findemail = await Users.findOne({
        where: {
            email:req.body.email,
        }
    });
   console.log(findemail)
    if(findemail){
        res.status(400).send({message: "email already present"})
    
    }else{
    const createData = await Users.create({
        name: req.body.name,
        email: req.body.email,
        product:req.body.product,
        product_qty:req.body.product_qty,
    });

        await createData.save()
     if(createData){
        res.status(201).send(createData);
       console.log("inserted") 
     } else{
        res.status(400).send({message: "error"})
     }
    }
}

const read = async (req, res) => {

    // const users = await Users.query("SELECT * FROM `crudtables`", { type: QueryTypes.SELECT });

    const userData = await Users.findAll({attributes:[ "id","name","email","product","product_qty"]});


    if(userData)res.status(200).send(userData);
    res.status(400).send({message: "error"})
}

const update = async (req, res) => {

    const updateData = await Users.update({
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

const deletedata = async (req, res) => {

    const deleteData= await Users.destroy({where:{name:req.body.name}})

    console.log(deleteData)
    if(deleteData){
        console.log("delete")
        res.status(200).sendStatus("deleted");    
    }else{
        res.status(400).send({message: "not deleted"})
    }

}
module.exports = {
    create,
    read,
    update,
    deletedata
}