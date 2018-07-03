# wepy-simple-toast
微信小程序toast组件，适用于wepy，支持Promise。

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
</script>

```
**调用方法**
```javascript
    // this.$invoke('toast', func, message)
    this.$invoke('toast', 'success', 'simple-toast success')
    //或者 this.$invoke('toast', func, message, options)，当前options只有duration（显示的时长）
    this.$invoke('toast', 'success', 'simple-toast success', { duration: 3000 }).then(data => {
        console.log(data)
      })

    // in async function
   let data = await this.$invoke('toast', 'error', 'simple-toast error', { duration: 5000 })
    console.log(data)
```
1. func 参数包括 `success`、`info`、`warning`、`error`
2. options参数当前只有 `duration`（显示的时长）

## 使用进阶
**使用MIXIN**
```javascript
  <script>
import wepy from 'wepy'
import toast from 'wepy-simple-toast'

export default class extends wepy.page {
  components = {
    toast
  }
  mixins = [toast.mixin]
 }
</script>
```

**调用方法**
```javascript
    // this.$infoTip(message)
    this.$infoTip('simple-toast info')
    //this.$errorTip(message, options)
    this.$errorTip('simple-toast error', { duration: 3000 }).then(data => {
        console.log(data)
      })
 
    // in async function
    let  data = await this.$warningTip('simple-toast warning', { duration: 3000 })
    console.log(data)
```
1. mixin了四个函数 `$successTip`、`$infoTip`、`$warningTip`、`$errorTip`
2. options参数当前只有 `duration`（显示的时长）

* PS: 如果`components`的名字不为`toast`，使用上述Mixin的四个函数时，需要在data里面添加`toastTagName:[toast的组件名]`

## 完整示例
点击查看 [example.wpy](https://github.com/jardenliu/wepy-simple-toast/blob/master/example.wpy)

## 效果图
![example1](https://jardenliu.github.io/demo/wepy-simple-toast/e1.png)
![example2](https://jardenliu.github.io/demo/wepy-simple-toast/e2.png)
