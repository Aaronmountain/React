import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

/* CSSTransition */
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       show: true
//     }
//     this.handleToggle = this.handleToggle.bind(this)
//   }
//   handleToggle() {
//     this.setState({ show: !this.state.show })
//   }
//   render() {
//     return (
//       <>
//         <CSSTransition
//           in={this.state.show}
//           timeout={1000}
//           classNames='fade'
//           unmountOnExit // 移除所包覆住的 DOM 元素
//           onEntered={el => { el.style.color = 'red' }} // 在進場動畫結束後的狀態時，調用此函式，參數為所包覆的DOM元素
//           appear={true} // 再載入頁面時也要有動畫效果
//         >
//           <div>
//             hello
//           </div>
//         </CSSTransition >
//         <button onClick={this.handleToggle}>click</button>
//       </>
//     )
//   }
// }

/* TransitionGroup，改用 TransitionGroup 包住 CSSTransition ，而 in 屬性就不用設置了 */
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd() {
    this.setState(prev => {
      return {
        list: [...prev.list, 'item']
      }
    })
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              < CSSTransition
                timeout={1000}
                classNames='fade'
                unmountOnExit // 移除所包覆住的 DOM 元素
                onEntered={el => { el.style.color = 'red' }} // 在進場動畫結束後的狀態時，調用此函式，參數為所包覆的DOM元素
                appear={true} // 再載入頁面時也要有動畫效果
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button className='btn' onClick={this.handleAdd}>click</button>
      </div>
    )
  }
}

export default App
