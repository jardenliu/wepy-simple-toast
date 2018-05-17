# wepy-simple-toast
微信小程序toast组件，适用于wepy

## 使用
**安装组件**
```bash
  npm install wepy-simple-toast -S
```
**引入组件**
```javascript
<template>
  <view class="container">
    这里是你的页面内容...
    <toast/>
  </view>
</template>

<script>
import wepy from 'wepy'
import toast from 'wepy-simple-toast'

export default class extends wepy.page {
  components = {
    toast
  }
 }

```
**调用方法**
```javascript
    // this.$invoke('toast', 'success', message)
    this.$invoke('toast', 'success', 'simple-toast success')
    //或者 this.$invoke('toast', 'success', message, options)，当前options只有duration（显示的时长）
    this.$invoke('toast', 'success', 'simple-toast success', { duration: 3000 })
```



## 效果图
![example1](https://jardenliu.github.io/demo/wepy-simple-toast/example1.png)
![example2](https://jardenliu.github.io/demo/wepy-simple-toast/example2.PNG)
