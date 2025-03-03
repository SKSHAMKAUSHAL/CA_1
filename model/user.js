const mongoose= require('mongoose');

const resturantSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    LocationOFCity:{
        type:String,
        required:true,
    },
    ItemsArr:{
type:[String]
    }
})



const items= new mongoose.Schema({

    NameofItems:{
        type:String,
        required:true,
    },
    PriceOfDish:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('Resturant',resturantSchema);
module.exports=mongoose.model('Items',items);