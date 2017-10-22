## 随机测试数据模拟工具

- 开发还在依赖后端提供接口?
- 需要接口返回动态数据完成业务逻辑?
- 不会任何服务端知识,自己造测试数据费事?

这个工具就可以帮你解决这些问题.

### 准备
- window/linux/osx
- node
- 了解mockjs

### 开始
* 安装依赖

```bash
npm install

```

* 定义模拟数据

只需在```projectdir/mock/data/```目录下创建一个文件,这个文件名将自动
定义为模拟数据的命名空间.如:
```
|__data
   |__device.js
   |__user.js

```


```javascript
// mock/data/device.js
var Mock = require('../mock');

var device_info = {
    'device_id': '@guid',
    'last_login':'@now'
};

module.exports = {
    info:function(){
        return Mock.mock(device_info)
    }
};
```
后面require 这个模块,我们就有了模拟数据  data.device.info()

模拟数据随机生成器使用了 [mockjs](http://mockjs.com/)

* 定义路由

只需在```projectdir/api/```目录下创建一个路由定义文件如下：

```javascript

// api/device.js

// 导入webserver 实例
var app = require('../express_instance');

// 导入所有的模拟数据生成function
var data = require(require('app-root-path') + '/mock');

// /device/info 为你要访问的url,
// /data.device.info()返回/mock/data/device.js中定义的info模拟数据
app.get('/device/info',function(req, res){
    res.send(JSON.stringify(data.device.info()));
});
```

如果你的接口过多，可以分多个文件归整，每个文件按以上格式书写即可，工具会自动生成api

* 运行

```bash

npm start

```

* 使用

![image](https://github.com/kuangch/MockServer/blob/master/api.user.list.png)

