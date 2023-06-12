import mongoose from 'mongoose';


const { Schema } = mongoose;

const PurchaseHistorySchema = new Schema({
    items: [
        {
            name: { type: String, require: true, minLength: 3 },
            list_price: { type: Number },
            original_price: { type: Number },
            images: { type: [String] },
            description: { type: String },
            total: { type: Number, required: true },
        },
    ],
    totalPayment: { type: Number, required: true },
    address: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('PurchaseHistory', PurchaseHistorySchema);
