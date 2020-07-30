class CbuildNumber {
    constructor(obj) {
        this.num = obj.num // 定义的数字
        this.dom = obj.dom // 容器
        this.color = obj.color ? obj.color  : "#1890FF" // 字体颜色
        this.size = obj.size ? obj.size : '16px'
    }
    // 判断是否为数字
    isNumber () {
        return isNaN(this.num)
    }
    // 给数字添加自增效果
    setNumberAdd (dom,n) {
        let i = 0
        if(n*1 !== 0 ){
            let time =  setInterval(() => {
                i++
                dom.innerHTML = i
                if(i === n*1){
                    clearInterval(time)
                }
            }, n*10);
            return
        }
        dom.innerHTML = i
    }
    // 判断num为多少位数
    getNumLength(){
        if(!this.isNumber()){
            let str = this.num + ''
            return  str.split("").length
        }
        throw "请输入数字，嘛呢！"; 
    }
    isHaveDom() {
        if(!this.dom){
            throw "请给个容器，嘛呢！"
        }
    }
    // 创建text
    createText(){
        let str = this.num + ''
        let arr = str.split("")
        for(let i=0;i<this.getNumLength();i++) {
            let txt =  document.createElement("text")
            txt.style.color = this.color
            txt.style.fontSize =  this.size
            this.setNumberAdd(txt,arr[i])
            this.dom.appendChild(txt);
        }
    }
    // 开始
    start() {
       this.isHaveDom()
       this.createText()
    }
}

