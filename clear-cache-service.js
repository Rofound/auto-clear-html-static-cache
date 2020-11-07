//#!/usr/bin/env node

var fs = require('fs')
var path = require('path');
var name = process.argv[2]
var version = process.argv[3]

var error = info => console.log('\033[31m' + info);
var success = info => console.log('\033[32m' + info);

if (!name) {
	error(`请输入文件名!`);
	process.exit()
}
var filenames = [path.resolve(__dirname+`/${name}`)];
// console.log(name, filenames);
// __dirname+'/cloud.html' 为具体的html文件，如果有多个文件，则添加到数组
var _t = +new Date();

function getArg(txts) {
	if (version) {
		return `${txts[0]}?version=${version}"`
	}
	
	return `${txts[0]}?_t=${_t}"`
}

filenames.forEach(function(item, index) {
	fs.readFile(item, 'utf8', function (err, files) {
		if (err || !files) {
			error(`文件未找到 ==> ${item}`)
			return
		}
		var result = files.replace(/href=["'].*\.css.*?["']/g, txt => {
			// 去掉最后一个字符串
			var str = txt.substr(0, txt.length-1);
			var txts = str.split('?');
			return getArg(txts)
		});
		result = result.replace(/src=["'].*\.js.*?["']/g, txt => {
			// 去掉最后一个字符串
			var str = txt.substr(0, txt.length-1);
			var txts = str.split('?');
			return getArg(txts)
		});

		fs.writeFile(item, result, 'utf8', function (err) {
			if (err) return console.log(err);
			var nameType = '当前系统时间戳 \033[34m_t; '
			if (version) {
				nameType = '版本 version '
			}
			success(`添加${nameType}参数到 ${name} 成功！`);
		});
	})
});