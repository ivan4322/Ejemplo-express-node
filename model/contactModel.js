const mongoose   = require('mongoose');

const contactShema = ({
    name:{
        type: 'string',
        required: [true, "please add the name"]
    },
    email:{
        type:String,
        required: [true, "please add the name"]
    },

    phone:{
        type:String,
        required: [true, "please add the name"]
    },
},
{
    timestamps:true,
}
)

module.exports = mongoose.model("Contact", contactSchema)
