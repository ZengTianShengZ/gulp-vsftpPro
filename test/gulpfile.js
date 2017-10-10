/**
 * @description: 自动发布上线 - 测试
 * @author: zengtiansheng
 * @update: 2017/10/2
 */
let gulp = require('gulp')
let vsftpPro = require('../index.js')

/**
 * 上传七牛
 */
gulp.task('uploadQn', function () {
    return gulp.src('./dist/static/**').pipe(vsftpPro.qn(
        {
            accessKey: '*******',
            secretKey: '*******',
            bucket: '*******', // 空间名
            origin: 'http://*******.clouddn.com', //外链默认域名
            prefix: `/${new Date().getTime()}/` // 添加文件前缀
        }))
})
/**
 * 上传文件服务器
 */
gulp.task('uploadServer', function () {
    return gulp.src('./dist/**').pipe(vsftpPro.server({
        remotePath: '*******', //上传远程服务器的文件路径
        host: '*******',       // 服务器 ip
        user: '*******',
        pass: '*******',
        cleanFiles: false,     // 是否清空 remotePath 下的资源文件
        uploadIndexHtml: false, // 是否上传 remotePath 下的 index.html,默认 true
        backupIndexHtml: true, // 是否备份 remotePath 下的 index.html
        port: 22
    }))
})
/**
 * index.html 文件回滚
 */
gulp.task('index-rollBack', function () {
    let scp = vsftpPro.scp
    scp.initScp({
        remotePath: '*******', //上传远程服务器的文件路径
        host: '*******',       // 服务器 ip
        user: '*******',
        pass: '*******',
        port: 22
    }).then(() => {
        scp.copyFile('/backupIndexHtml/index.html', '/index.html')
    })
})

gulp.task('dev', ['uploadQn', 'uploadServer'])