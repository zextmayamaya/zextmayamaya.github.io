const express = require('express')
const app = express()

const router = require('./router/index')
// 使用路由
app.use(router);

app.listen(4000, () => {
	console.log("server running at http://127.0.0.1:4000");
})
/*
shell 获取文件everydayRecite.csv第二天的内容
cat everydayRecite.csv | grep $(date --date="1day" +%F) | cut -d ',' -f 3
*/