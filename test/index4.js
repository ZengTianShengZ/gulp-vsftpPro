/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var scpFiles = require('../libs/scpFiles.js');

var scp = new scpFiles({
    remotePath: '/mnt/webapps/opt/tttttt',
    host: 'x',
    user: 'x',
    pass: 'x',
    port: 22
})
scp.comFile('/backupIndexHtml/index.html','/index.html')