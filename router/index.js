const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	const file = '../tomorrow'
	fs.readFile(path.join(__dirname, file), "utf8", (err, data) => {
		if (err) return console.log("read file fail: "+err.message);
		// 获取明天的日期
		const day = getTomorrow('-');

		const content = ''
					+'<!DOCTYPE html>'
					+'<html lang="en">'
					+'<head>'
					+'<meta charset="UTF-8">'
					+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
					+'<title>计划</title>'
					+'</head>'
					+'<body>'
					+'<div>'
					+'<h1>A计划</h1>'
					+`<p>明日 ${day}</p>`
					+`<p>读： ${data}</p>`
					+'</div>'
					+'<style>'
					+'h1,p{'
					+'	text-align: center;'
					+'}'
					+'h1{'
					+'	color: yellow;'
					+'}'
					+'div{'
					+'	min-width: 10em;'
					+'	max-width: 20em;'
					+'	margin: auto;'
					+'	background-color: yellowgreen;'
					+'	padding: 10px 20px;'
					+'	font-size: 1.5em;'
					+'}'
					+'</style>'
					+'</body>'
					+'</html>';
		fs.writeFile(path.join(__dirname, "../index.html"), content, 'utf8', (err) => {
			if (err) return console.log(err);
		})
		res.send("ok");
	})

})
module.exports = router;

function getTomorrow(spChar){
	// 获取当前时间
	const current = new Date();
	// 复制当前时间
	const tomorrow = new Date(current);
	// 设置tomorrow为第二天
	tomorrow.setDate(current.getDate());
	// tomorrow.setDate(current.getDate()+1);
	// 定义年月日变量，不足两位的补位。注意月份是从0开始
	const y = String(tomorrow.getFullYear());
	const m = String(tomorrow.getMonth()+1).padStart(2,"0");
	const d = String(tomorrow.getDate()).padStart(2,"0");
	return y + spChar + m + spChar + d;
}