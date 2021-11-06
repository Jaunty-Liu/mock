var fs=require('fs');
var path=require('path');
var json5=require('json5');
//解析json文件
//读取指定的json5文件
var json=fs.readFileSync(path.join(__dirname,'./userInfo.json5'),'utf-8');
//打印读取的文件内容
console.log("json:",json);
//将文件内容解析为json形式
var obj=json5.parse(json);
console.log("obj:",obj);