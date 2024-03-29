/**
 * index.js:webpack入口起点文件
 */
import React from './react';
import ReactDOM from './react-dom';

// let style = { border: '3px solid red', margin: '5px' };
// let element1 = (
//   <div id="A1" style={style}>
//     A1文本
//     <div id="B1" style={style}>B1文本
//       <div id="C1" style={style}>C1文本</div>
//       <div id="C2" style={style}>C2文本</div>
//     </div>
//     <div id="B2" style={style}>B2文本</div>
//   </div>
// )
// ReactDOM.render(element1, document.querySelector('#root'));

// let render2 = document.getElementById('render2');
// render2.addEventListener('click', () => {
//   let element2 = (
//     <div id="A1-new" style={style}>
//       A1文本-new
//       <div id="B1-new" style={style}>B1文本-new
//         <div id="C1-new" style={style}>C1文本-new</div>
//         <div id="C2-new" style={style}>C2文本-new</div>
//       </div>
//       <div id="B2-new" style={style}>B2文本-new</div>
//       <div id="B3-new" style={style}>B3文本-new</div>
//     </div>
//   )
//   ReactDOM.render(element2, document.querySelector('#root'));
// });

// let render3 = document.getElementById('render3');
// render3.addEventListener('click', () => {
//   let element2 = (
//     <div id="A1-new2" style={style}>
//       A1文本-new2
//       <div id="B1-new2" style={style}>B1文本-new2
//         <div id="C1-new2" style={style}>C1文本-new2</div>
//         <div id="C2-new2" style={style}>C2文本-new2</div>
//       </div>
//       <div id="B2-new2" style={style}>B2文本-new2</div>
//     </div>
//   )
//   ReactDOM.render(element2, document.querySelector('#root'));
// });

// class ClassCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }

//   onClick = () => {
//     this.setState(state => ({
//       number: state.number + 1
//     }))
//   }

//   render() {
//     let { number } = this.state;
//     return (
//       <div id="counter" name={this.props.name}>
//         <span>{number}</span>
//         <button onClick={this.onClick}>加1</button>
//       </div>
//     )
//   }
// }

const ADD = 'ADD';

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function FunctionCounter() {
  const [numberState, setNumberState] = React.useState({ number: 0 });
  const [countState, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <div>
      <div id="counter1">
        <span>{numberState.number}</span>
        <button onClick={() => setNumberState({ number: numberState.number + 1 })}>加1</button>
      </div>
      <div id="counter2">
        <span>{countState.count}</span>
        <button onClick={() => dispatch({ type: ADD })}>加1</button>
      </div>
    </div>
  )
}

ReactDOM.render(<FunctionCounter />, document.getElementById("root"));