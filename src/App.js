// 引入依赖
import React, { Component } from 'react'
// 引入 css 文件
import './App.css'
export default class App extends Component {
  render() {
    let titles = ["Pullrequest","lsssues","Maketplace","Explore"]
    let forList=[]
    
    return (
      <div>
      <ul>
        {/* <li>Pullrequest</li>
        <li>lsssues</li>
        <li>Maketplace</li>
        <li>Explore</li> */
          titles.map((v,i)=> <li key={i}>{v}</li>)
          //foreach返回值是空，要push
        // titles.forEach((v,i)=> <li key={i}>{v}</li>)
        }
        </ul>
      </div>
    )
  }
}

