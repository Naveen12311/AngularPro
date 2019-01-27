const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
   blogId: {
    type: String,
    unique :true
   },
   title:{
   type:String,
   default:''
   },
   body:{
   type:String,
   default:''
   },
   description: {
    type:String,
    default:''
    },
    date:{
    type:Date,
    default:Date.now()
    },
    updatedtime:{
    type:Date,
    default:Date.now()
    }
})

mongoose.model('blog',blogSchema);