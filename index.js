/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
'use strict';
// var gutil   = require('gulp-util');
// var through = require('through2');
// var vsftp = require('./libs/vsftp.js')
//
// module.exports = function (options) {
//     return vsftp(options.server.serverConfig)
// };

var vsftp = require('./libs/vsftp.js')
var qn = require('./libs/qiniu.js')

module.exports = {
    vsftp: vsftp,
    qn: qn
}

