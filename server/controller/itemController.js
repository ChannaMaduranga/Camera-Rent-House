import itemModel from "../../server/models/itemModel.js";

const addItem = async(req,res)=>{
    // let image_filename = `${req.file.filename}`;

    const item = new itemModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        perDay:req.body.perDay,
        image:image_filename
    })
    try{
        await item.save();
        res.json({success:true,message:"Item Added"});
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }

}