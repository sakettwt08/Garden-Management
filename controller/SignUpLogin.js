const express = require("express")
const app = express()
const {USER} = require("../models/Login")

async function HandleUSerLogin(req,res){
    const body= req.body
    console.log(JSON.stringify(body))
    if(!body.FirstName || !body.SecondName || !body.Gender || !body.email || !body.password){
       return  res.status(400).redirect("/signup")
    }
   const userdet = await USER.create({
    FirstName:body.FirstName,
    SecondName:body.SecondName,
    Gender:body.Gender,
    email:body.email,
    password:body.password
   })
    console.log(userdet)
    return res.status(200).redirect("/home")
}

async function UserLogin(req,res){
    const body = req.body
    if(!body.email || !body.password){
        return req.status(401).redirect("/login")
    }
   try{
     const user = await USER.findOne({
        email:body.email,
        password:body.password
    })
    if(!user){
        res.status(401).json({error:"Wrong Email Password"})
    }
    res.send(200).redirect("/home")
   } catch (error){
    console.log(error)
   }
}
