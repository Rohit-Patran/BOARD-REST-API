import mongoose from 'mongoose';
const counterSchema = new mongoose.Schema(
    {
        id:{
            type:String,
        },
        seq:{
            type:Number,
        },
    },
    {
        
        versionKey:false
    }
);

const counter = mongoose.model("counters" , counterSchema);
export { counter as default };