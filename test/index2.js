/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/30
 */
var gulp = require('gulp');
var qiniu = require('../libs/qiniu.js');

gulp.src('./dist/static/**').pipe(qiniu(
    {
        accessKey: 'x',
        secretKey: 'x',
        bucket: 'x', // 空间名
        origin: 'x', //外链默认域名
    }))
