const express=require('express')
const { userRegister, loginRegister, createPro, sellItems,getAll,getPro } = require('../controllers/logic')
const upload = require('../multerconfig/storageConfig')


//create an object for router class in object
const router=new express.Router()

//route for register
router.post('/users/register',userRegister)
//roote for login
router.post('/users/login',loginRegister)
//route for create profile
router.post('/users/createprofile',upload.single('user_profile'),createPro)
//route for sell items
router.post('/users/sell',upload.single('user_profile'),sellItems)
//get all sellitems
router.get('/users/getitems',getAll)
//get profile
router.get('/users/getprofile/:id',getPro)

module.exports=router