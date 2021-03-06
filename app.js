const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.listen(3000);

const getAllFiles = function (dirPath, arrayOfFiles) {
	files = fs.readdirSync(dirPath);

	arrayOfFiles = arrayOfFiles || [];

	files.forEach(function (file) {
		if (fs.statSync(dirPath + '/' + file).isDirectory() && file !== 'node_modules') {
			arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
		} else {
			arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
			fs.appendFileSync(
				'C:/Users/houseplayer/Desktop/files.txt',
				path.join(__dirname, dirPath, '/', file) + '\n'
			);
		}
	});

	return arrayOfFiles;
};

console.log(getAllFiles('C:/Users/houseplayer/Documents/web projects/chatroom', []));
