/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var gulp = require('gulp');
var vsftp = require('../libs/vsftp.js');

gulp.src('./dist/index.html').pipe(vsftp({
    remotePath: '/mnt/webapps/opt/tttttt',
    host: 'x',
    user: 'x',
    pass: 'x',
    cleanFiles: false,     // 是否清空 remotePath 下的资源文件
    backupIndexHtml: true, // 是否备份 remotePath 下的 index.html
    port: 22
}))
