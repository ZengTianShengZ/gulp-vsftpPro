该插件是基于`gulp-vsftp`修改的，增加了备份和上传七牛cdn的功能

## Feature

   - 基于 ftp 协议 上传文件到服务器
   - 上传文件到七牛
   - 服务器文件备份


## Install
```
npm install gulp-vsftppro --save-dev
```

## Usage
```
 let vsftpPro = require('gulp-vsftppro')
```

### 上传七牛

将 dist/static 文件夹下的所有资源上传到七牛


```
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
```

### 上传文件服务器

将 dist/index.html 文件上传到服务器

```
gulp.task('uploadServer', function () {
    return gulp.src('./dist/index.html').pipe(vsftpPro.server({
        remotePath: '*******', //上传远程服务器的文件路径
        host: '*******',       // 服务器 ip
        user: '*******',
        pass: '*******',
        cleanFiles: false,     // 是否清空 remotePath 下的资源文件
        backupIndexHtml: true, // 是否备份 remotePath 下的 index.html
        port: 22
    }))
})
```

### index.html 文件回滚

将 remotePath 根目录下backupIndexHtml文件夹下的 index.html copy 到 remotePath

```
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
```

### 一般项目发布流程

先将资源文件上传到七牛或其他CDN，在将 .html 文件上传到服务器

gulp.task('dev', ['uploadQn', 'uploadServer'])