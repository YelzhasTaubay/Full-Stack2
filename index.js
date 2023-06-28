import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import {registerValidation} from "./validations/auth.js";

mongoose.connect(
    'mongodb+srv://yelzhas:e2596781234@cluster0.t6zgebl.mongodb.net/?retryWrites=true&w=majority'
)   .then(() => {console.log('DB Ok')})
    .catch((err) => {console.log('DB error', err)})

const app = express()

app.use(express.json())

app.post('/auth/register', registerValidation,   (req, res) => {

})

app.listen(4444, (error) => {
    if (error){
        console.log(error)
    }
    console.log('Server Ok')
})
































