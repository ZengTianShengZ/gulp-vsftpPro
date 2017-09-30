/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/30
 */
var gutil   = require('gulp-util')
var qn = require('qn')
var through = require('through2')
var fs = require('fs')

var qiniu = function (option) {
    var client = qn.create({
        accessKey: option.accessKey,
        secretKey: option.secretKey,
        bucket: option.bucket,
        origin: option.origin
    })
    var fileCount = 0
    var uploadFile =  function (filePath, key) {
        client.uploadFile(filePath, {key: key}, function (err, result) {
            if (err) {
                gutil.log('qiniu uploadFile error >>>', gutil.colors.green(err.error))
                return
            }
            fileCount ++
            gutil.log('qiniu uploadFile >>> '+option.origin+'/', gutil.colors.green(result.key));

        })
    }
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file)
            return cb()
        }
        uploadFile(file.path, file.relative)
        this.push(file)
        cb()
    })
}
module.exports = qiniu