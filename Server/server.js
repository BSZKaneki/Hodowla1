//BX3flaCztTttDHVr
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { default: mongoose, mongo } = require('mongoose');

const PORT = process.env.PORT || 5000;

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())
app.use(morgan('common'))

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL,{
}).then(()=>{console.log("MongoDBisconected")})

app.listen(PORT,()=>{
    console.log(`run at${PORT}`)
})