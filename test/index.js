/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var gulp = require('gulp');
var vsftpPro = require('../index.js');

gulp.src('./dist/**').pipe(vsftpPro({
    qn: {
        serverConfig: {
            accessKey: 'x',
            secretKey: 'x',
            bucket: 'x', // 空间名
            origin: 'x', //外链默认域名
        },
        upLoadFileConfig: {
            htmlDepend: true, // 是否上传 index.html依赖的资源文件
            resource: false   // 是否上传所有资源文件到七牛
        }
    },
    server: {
        serverConfig: {
            remotePath: '/mnt/webapps/opt/tttttt',
            host: 'x',
            user: 'x',
            pass: 'x',
            cleanFiles: false,
            port: 22
        },
        upLoadFileConfig: {
            resource: true // 是否上传资源文件到服务器，false 的话只上传 index.html
        }
    }
}))
