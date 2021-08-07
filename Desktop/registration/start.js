const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const mongoose = require('mongoose');



const regRoutes = require('./routes/registerRouter.js');

const taskRoutes = require('./routes/tasksRoutes.js');
const path = require('path');
const multer = require('multer');
dotenv.config();
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false},() => console.log("Database connected!"));

const app = express();

app.use(express.json());

app.use(cors());



app.use('/api/users', regRoutes);

app.use('/api/tasks', taskRoutes);



app.use('/', express.static(path.join(__dirname,'static/html')));

app.use('/css', express.static(path.join(__dirname,'static/css')));


//listening to the server
app.listen(process.env.PORT,()=>{
    console.log(`server running at  ${process.env.PORT}`);
})