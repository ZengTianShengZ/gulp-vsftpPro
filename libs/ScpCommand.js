/**
 * @description: 远程复制文件 工具类
 * @author: zengtiansheng
 * @update: 2017/9/30
 */
let log = require('./consoleLog.js')
let SSH2 = require('SSH2')
let con = new SSH2()

let hostPath = ''
let scpSftp

class ScpCommand {
    constructor(opction) {

    }
    /**
     * 初始化连接
     * @param opction
     * @returns {Promise}
     */
    initScp(opction) {
        hostPath = '..' + opction.remotePath
        return new Promise((resolve, reject) => {
            con.on('ready', function (err) {
                if(err) {
                    reject(err)
                }
                con.sftp(function (err, sftp) {
                    if (err) {
                        reject(err)
                    }
                    sftp.on('end', function () {
                        log.green('scp session closed')
                    })
                    scpSftp = sftp
                    resolve()
                })
            })
            con.on('error', function (err) {
                log.red('connection error')
            })
            con.on('end', function () {
                log.green('connection end')
            })
            con.on('close', function (had_error) {
                log.green('connection close')
            })
            con.connect({
                host: opction.host,
                port: opction.port || 22,
                username: opction.user,
                password: opction.pass
            })
        })
    }

    /**
     * 复制文件
     * @param source_file
     * @param target_file
     */
    copyFile(source_file, target_file) {
        source_file = `${hostPath}${source_file}`
        target_file = `${hostPath}${target_file}`
        this.getExistSourcePath(source_file, function () {
            let exe = `cp ${source_file} ${target_file}`
            con.exec(exe, function (err) {
                if(err) {
                    log.red(`copy ${source_file} file to err`)
                } else {
                    log.green(`copy ${source_file} file to srccess`)
                }
                con.end()
            })
        })
    }

    /**
     * 远程路径是否存在
     * @param source_folder
     * @param callBack
     */
    getExistSourcePath(source_folder, callBack) {
        scpSftp.exists(source_folder, function (exists) {
            if(exists) {
                callBack()
            } else {
                log.red(`${source_folder} is not exists`)
                con.end()
            }
        })
    }
}

module.exports = new ScpCommand()