
const mongoose=require('mongoose')
const validator=require('validator')

const users=mongoose.model('User',{
    fname:{
        type:String,
        requierd:true,
        trim:true
    },
 
    email:{
        type:String,
        requierd:true,
        trim:true,
        unique:true,
        validator(value){
            if(validator.isEmail(value)){
                throw Error("invalid Email")
            }
        }
    },
   
    psw:{
        type:String,
        requierd:true

    }

})

const profiles=mongoose.model('Profile',{
    fname:{
        type:String,
        requierd:true,
        trim:true
    },
    pno:{
        type:Number,
        requierd:true,
        
    },

    email:{
        type:String,
        requierd:true,
        trim:true,
        unique:true,
        validator(value){
            if(validator.isEmail(value)){
                throw Error("invalid Email")
            }
        }
    },
    pic:{
        type:String,
        requierd:true,
        trim:true
    },
   
    house:{
        type:String,
        requierd:true

    },
    pin:{
        type:Number,
        requierd:true,
        trim:true
    },
    place:{
        type:String,
        requierd:true,
        trim:true
    },
    district:{
        type:String,
        requierd:true,
        trim:true
    }


})

const sales=mongoose.model('Sale',{
    itemname:{
        type:String,
        requierd:true,
        trim:true
    },
    discription:{
        type:String,
        requierd:true,
        
    },

    email:{
        type:String,
        requierd:true,
        trim:true,
        unique:true,
        validator(value){
            if(validator.isEmail(value)){
                throw Error("invalid Email")
            }
        }
    },
    image:{
        type:String,
        requierd:true,
        trim:true
    },
    
    price:{
        type:Number,
        requierd:true,
        trim:true
    },

    contactno:{
        type:Number,
        requierd:true,
        trim:true
    }
   


})

module.exports={users,profiles,sales}