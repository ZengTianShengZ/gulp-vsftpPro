/**
 * @description: 对服务器文件进行 cp 操作
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var scpCommand = require('../libs/ScpCommand.js');

scpCommand.initScp({
    remotePath: '*******', //上传远程服务器的文件路径
    host: '*******',       // 服务器 ip
    user: '*******',
    pass: '*******',
    port: 22
}).then(() => {
    scpCommand.copyFile('/backupIndexHtml/index.html', '/static/index2.html')
})