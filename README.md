# NumberScrolling
数字滚动效果JS

- 使用
``` 
    let dom = document.getElementById('num')
    let obj  ={
        dom, // 渲染数字的节点
        num: "5713689", // 数字
        color: '#1890FF' // 字体颜色
        size: '40px' // 字体大小
    }
    const t = new CbuildNumber(obj)
    t.start()
```
