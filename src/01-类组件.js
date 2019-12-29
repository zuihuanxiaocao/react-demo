import React, { Component } from 'react'
/* 
1.通过Class定义的，名称要大写
2.继承了component
3.render方法,render函数里面返回标签
4.有生命周期，占用空间，内存多一点
*/
export default class APP extends Component {

    //1.构造函数的初始化
    constructor(props){
        super(props);
        this.state={
            desc:"描述"
        }
    }

    //类属性初始化
    // state={
    //     desc:"我是类属性初始化"
    // }
    render() {
        return (
            <div>
              { this.state.desc }  
            </div>
        )
    }
}
