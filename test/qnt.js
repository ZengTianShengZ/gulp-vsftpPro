/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/29
 */
var qn = require('qn');
var path = require('path');

var client = qn.create({
    accessKey: 'x',
    secretKey: 'x',
    bucket: 'x',
    origin: 'x'
});

var dist = path.resolve(__dirname, 'dist/static/vsftp.js')
// upload a file with custom key
client.uploadFile(dist, {key: '1506682588433/ttttttt3/vsftp.js'}, function (err, result) {
    console.log(result);
    // { hash: 'FoiyevgNv07Wbxb2hR06KjsRjP-n',
    //     key: '1506682588433/ttttttt/vsftp.js',
    //     'x:ctime': '1506662059',
    //     'x:filename': 'vsftp.js',
    //     'x:mtime': '1506662059',
    //     'x:size': '342',
    //     url: 'https://dn-qtshe-https-js.qbox.me/1506682588433/ttttttt/index.js'
    // }

    //
    // { error: 'file exists' }
    //


});
