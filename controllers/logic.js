const users = require("../models/schema");

// for register
exports.userRegister = async (req, res) => {

    // res.send("register works")

    //req.file

    const { fname, email, psw} = req.body

    if (!fname || !email || !psw ) {

        res.status(401).json("all inputs are required")

    }

    try {
        const preUser = await users.users.findOne({email})
        if (preUser) {
            res.status(403).json("User already exists")
        }
        else {
            const newUser = new users.users({
                fname, email, psw
            })

            await newUser.save()
            res.status(200).json(newUser)
        }

    }
    catch (error) {
        res.status(401).json(error)

    }



}
//for login

exports.loginRegister = async (req, res) => {

    const { email, psw} = req.body

    if ( !email || !psw ) {

        res.status(401).json("all inputs are required")

    }

    try {
        const preUser = await users.users.findOne({email})
        if (preUser) {
           if(psw === preUser.psw){
            res.send({message:"login Successfull"})
           }
           else{
            res.send({message:"Incorrect Password"})
           }
        }
        else {
            res.send({message:"employee not found"}) 
    
        }

    }
    catch (error) {
        res.status(401).json(error)

    }



}
// for create profile
exports.createPro = async (req, res) => {

    // res.send("register works")

    const file = req.file.filename

    const { fname, pno, email, house, pin, place, district} = req.body
  

    if (!fname || !pno || !email || !house || !pin || !place || !district || !file ) {

        res.status(200).json("all inputs are required")

    }

    try {
       
        const preProfile = await users.profiles.findOne({email})
        if (preProfile) {
            
            res.send({message:"profile already created"}) 
        }
        else {
          
            const newPro = new users.profiles({
                fname, pno, email, house, pin, place, pic: file, district
            })

            await newPro.save()
            res.send({message:"Profile Created"}) 
        }

    }
    catch (error) {
        res.status(401).json(error)

    }

}
//sell
exports.sellItems = async (req, res) => {

    // res.send("register works")

    //req.file

    const file = req.file.filename

    const { itemname,discription, email, price,contactno } = req.body

    if (!itemname || !discription || !email || !price || !contactno || !file) {

        res.status(403).json("all inputs are required")

    }

    try {
        const sell = await users.sales.findOne({email})
        if (sell) {
            const newSell = new users.sales({
                itemname,discription, email, price,image: file,contactno
            })

            await newSell.save()
            res.send({message:"Item Added Successfully"})
           
        }
        else {
         
            res.send({message:"email not matched"})  
        }

    }
    catch (error) {
        res.status(401).json(error)

    }



}
//get all sell items

exports.getAll = async (req, res) => {
     //access query parameter from req

     const searchKey=req.query.search

     //create regular expression to match with fname
 
     const query={
         itemname:{$regex:searchKey,$options:"i"} //"i" =case insensitive
     }
 
     try {
         const allEmployees = await users.sales.find(query)
         res.status(200).json(allEmployees)
 
 
     }
 
     catch (err) {
 
         res.status(401).json(err)
 
     }

}
//view profile
exports.getPro = async (req, res) => {


    try {
        const preuser = await users.users.findOne({ user:req.user.id })
        res.status(200).json(preuser)


    }

    catch (err) {

        res.status(401).json("user not found")

    }

    
}