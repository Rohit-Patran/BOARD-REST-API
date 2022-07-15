import mongoose from 'mongoose';
const boardSchema = new mongoose.Schema(
    {
        _id:{
            type:Number,
            required:true,
        },
        stage:{
            type:Number,
            required:true
        },
        title:{
            type:String,
            required:true
        },

    },
    {
        versionKey:false
    }
);

const Board = mongoose.model("boards" , boardSchema);
export { Board as default};