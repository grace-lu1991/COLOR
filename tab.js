class Tab{
    constructor(Option){
      Option = Option || {};
      this.itemClass = Option.itemClass || '.item';
            this.eventType = Option.eventType || 'mouseover'
            this.itemActiveClass = Option.itemActiveClass || 'active'
            this.contentClass = Option.contentClass || '.content'
            this.contentShowClass = Option.contentShowClass || 'show'
        // 优化的写法
        // let option = {
        //     itemClass : '.item',
        //     itemActiveClass : 'active',
        //     eventType : 'mouseover',
        //     contentShowClass : 'show',
        //     contentClass : '.content',
        // }
// Object.assign(option,def);
// Object.assign(this,option);

//获取元素
        this.items = document.querySelectorAll(this.itemClass);
        this.content = document.querySelectorAll(this.contentClass);
        this.addEvent();
    };
//  封装方法，注册事件
addEvent(){
    this.items.forEach((e,i)=>{
e.addEventListener(this.eventType,(e)=>{
    let target=e.target;
    this.changeItems(target);
    this.changeContent(i)
})
    })
}
changeItems(current){
    this.items.forEach(e=>{
        e.classList.remove( this.itemActiveClass);
    });
    current.classList.add(this.itemActiveClass);
};
 changeContent(index){
    this.content.forEach(e=>{
        e.classList.remove(this.contentShowClass);
  })
    this.content[index].classList.add(this.contentShowClass);
}



}
let tab = new Tab();