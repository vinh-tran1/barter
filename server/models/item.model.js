import mongoose from "mongoose";
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    location: { type: String, required: true }, 
    itemType: { type: String, required: true },
    expiration: String
}, {
    timestamps: true
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
