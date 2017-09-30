/**
 * @description: 文件或模块描述
 * @author: zengtiansheng
 * @update: 2017/9/30
 */
let gutil   = require('gulp-util');
let con = new SSH2();

class scpCommand {
    constructor(opction) {
        this.scpSftp = ''
        this.init(opction)
    }
    init(opction) {
        con.on('ready', function() {
            gutil.log(gutil.colors.green('connection ready!'))
            // 创建个远程 ftp 会话  ftp文件传输协议
            con.sftp(function (err, sftp) {
                if (err) {
                    throw err
                }
                this.scpSftp = sftp
                // 监听 ftp end  事件
                sftp.on('end', function () {
                    gutil.log('VSFTP :: VSFTP session closed');
                })
            })
        }).connect({
            host: opction.host,
            port: opction.port || 22,
            username: opction.user,
            password: opction.password
        })
        con.on('error', function (err) {
            gutil.log(gutil.colors.red('connection error'))
        })
        con.on('end', function () {
            gutil.log(gutil.colors.green('connection end'))
        })
        con.on('close', function (had_error) {
            gutil.log(gutil.colors.green('connection close'))
        })
    }
    comFile(source_file, target_file) {
        if(this.scpSftp) {
            this.scpSftp.exists(source_file, (err) => function () {
                if (err) {
                    gutil.log(gutil.colors.green('not such source_file'))
                    con.end()
                } else {

                }
            })
        }
    }
    comFolder(source_folder, target_folder) {

    }
}

module.exports = scpCommand