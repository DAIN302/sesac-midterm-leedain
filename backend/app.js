const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/index');

//  body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// 라우터 등록
app.use('/', router);

// 모델 등록
sequelize.sync({force:false}) 
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`database connection succeeded`);
        console.log(`Server is running! Port number is ${PORT}`);
    });
}).catch((err)=>console.log(err))