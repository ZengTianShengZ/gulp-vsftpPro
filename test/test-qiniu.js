/**
 * @description: 上传文件到七牛
 * @author: zengtiansheng
 * @update: 2017/9/30
 */
var gulp = require('gulp');
var qiniu = require('../libs/qiniu.js');

gulp.src('./dist/static/**').pipe(qiniu(
    {
        accessKey: '*******',
        secretKey: '*******',
        bucket: '*******', // 空间名
        origin: 'http://*******.glb.clouddn.com', //外链默认域名
        prefix: `/${new Date().getTime()}/` // 添加文件前缀
    }))
