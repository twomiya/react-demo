## react-demo

#### 一个简单的react小案例
**安装依赖**

`npm install` 或者 `yarn install`

**运行程序**

`npm start` 或者 `yarn start`






# learning mark

**1，文件解释**
`App.test.js`自动化测试文件

`manifest.json` pwa配置文件 可以访问图标快捷方式

**2，PWA progressive web application**
**写网页的形式写手机app 断网的时候第二次访问也可以看到第一次访问的页面**

`import registerServiceWorker from './registerServiceWorker';`

**3，react16 有占位符**

`Fragment` 可以解决render函数外层的div的问题
`import {Fragment} from 'react'`
...
`<Fragment></Fragment>`

**4，定义数据**

```
constructor(props){
  super(props)
}

```
