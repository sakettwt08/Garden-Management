const multer = require("multer")
const path = require("path")
const express = require("express")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"ComplaintImages")
    },
    filename: function(req,file,cb){
            cb(null,Date.now+"-"+file.originalname)
    }
})
const upload = multer(storage)
async function ComplaintImage(req,res){
    return res.status(200).json({message:"Complaint Registerd"})
}
module.exports={upload,ComplaintImage}