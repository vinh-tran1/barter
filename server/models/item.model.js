import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
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

const Item = mongoose.model("user", itemSchema);
export default Item;
