/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var gutil   = require('gulp-util');
var through = require('through2');
var vsftp = require('./libs/index.js')

module.exports = function (options) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        var chunk = file.contents.toString()
        var str = chunk.replace(/a/g, "z")
        file.contents = new Buffer(str)
        gutil.log('', gutil.colors.magenta('.......success.......'));
        this.push(file)
        cb();
    });
};



