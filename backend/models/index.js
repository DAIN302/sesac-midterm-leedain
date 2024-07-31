const Sequelize = require('sequelize'); 
const config = require(__dirname + '/../config/config.json')["development"]; 
const db = {}; // 빈 객체

// sequelize 객체 생성
const  sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기
const todoModel = require('./Todo')(sequelize, Sequelize); 

// db 객체에 할당
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = todoModel;

module.exports = db;