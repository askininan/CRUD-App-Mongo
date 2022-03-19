var Userdb = require('../model/model');

//create and save new user API
exports.create = (req,res) =>{
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // new user instance
    const user = new Userdb({
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        status:req.body.status
    })

    // Save user in the database
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "An error occured while creating a user"
            })
        })
    }


// retrieve and return all users/ retrieve and return a signle user
exports.find = (req,res)=>{
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}


// Update a new idetified user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body, {useFindandModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message:"Cannot Update user with " + id + " User not found"})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error Update user info"})
        })
}

// Delete a user with a specified user id in the request
exports.delete = (req,res)=>{

}