import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    bio: String,
    groups: [{ type: Schema.Types.ObjectId, ref: 'group', default: [] }],
    groupRequest: [{ type: Schema.Types.ObjectId, ref: 'user', default: [] }],
    inventory: [{ type: Schema.Types.ObjectId, ref: 'inventory', default: [] }],
    listings: [{ type: Schema.Types.ObjectId, ref: 'listing', default: [] }],
    trades: [{ type: Schema.Types.ObjectId, ref: 'trade', default: [] }]
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
