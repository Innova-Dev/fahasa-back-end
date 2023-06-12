import purchaseSchema from "../schemas/purchase";
import Purchase from "../models/purchase";

export const createPurchase = async (req, res) => {
    try {
        const { error } = purchaseSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const purchase = await Purchase.create(req.body);
        if(!purchase){
            return res.status(400).json({
                message: "Không thể đặt hàng",
            });
        }
        return res.status(201).json({
            message: "Đặt hàng thành công",
            data: purchase,
        });
    }catch{
        return res.status(500).json({
            message: error,
        });
    }
};
