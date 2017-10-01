/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/10/2
 */
let gutil = require('gulp-util');
module.exports = {
    red(msg) {
        gutil.log(gutil.colors.red(msg))
    },
    green(msg) {
        gutil.log(gutil.colors.green(msg))
    },
    blue(msg) {
        gutil.log(gutil.colors.blue(msg))
    }
}