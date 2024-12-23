const { default: mongoose } = require("mongoose");

const Shema = mongoose.Schema

const dogShema = new Shema({
        name:{
            type:String,
            required:true
        },
        ur:{
            type:Date,
            required:true 
        },
        dysplazja:{
            type: String,
            required:true
        },
        images:{
            type:String,
            required:true
        },
        cloudinary_id: {
            type: String,
            required: true,
          },
        },{
          timestamps: true
})
module.exports = mongoose.model('Dog', dogShema)