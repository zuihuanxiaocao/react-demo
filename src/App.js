// 引入依赖
import React, { Component } from 'react'
// 引入 css 文件
import './App.css'
export default class App extends Component {
  // render() {
  //   let titles = ["Pullrequest", "lsssues", "Maketplace", "Explore"]
  //   let forList = []
  //   titles.forEach((v, i) => forList.push(<li key={i}>{v}</li>))
  //   return (
  //     <div>
  //       <ul>
  //         {/* <li>Pullrequest</li>
  //             <li>lsssues</li>
  //             <li>Maketplace</li>
  //             <li>Explore</li> */
  //           // titles.map((v, i) => <li key={i}>{v}</li>)
  //           //foreach返回值是空，要push到一个空数组
  //           // titles.forEach((v,i)=> <li key={i}>{v}</li>)
  //           forList
  //         }

  //       </ul>
  //     </div>
  //   )
  // }

  // render() {
  //   let props = {
  //     className: "redCls"
  //   }
  //   let props2 = {
  //    className:"blueCls"
  //   }
  //   return React.createElement('div', props, [React.createElement("span", {}, "你好朋友"), React.createElement("div", props2, "good moring")])
  // }
  state = {
    titles: ["Pullrequest", "lsssues", "Maketplace", "Explore"],
    desc: ''
  }
  handleClick = (v) => {
    this.setState({
      desc: v
    })
  }
  render() {
    return <div>
      <ul>
       {this.state.titles.map((v, i) =><li onClick={this.handleClick.bind(this, v)} key={i}>{v}</li>)}
      </ul>
      <div>
        {this.state.desc}
      </div>
    </div>

  }
}