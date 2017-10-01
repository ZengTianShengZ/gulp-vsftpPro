/**
 * @description: 上传文件到服务器
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var gulp = require('gulp');
var server = require('../libs/server.js');

gulp.src('./dist/index.html').pipe(server({
    remotePath: '*******', //上传远程服务器的文件路径
    host: '*******',       // 服务器 ip
    user: '*******',
    pass: '*******',
    cleanFiles: false,     // 是否清空 remotePath 下的资源文件
    backupIndexHtml: true, // 是否备份 remotePath 下的 index.html
    port: 22
}))
