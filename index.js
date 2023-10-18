// var mod = require('./add');
// console.log(mod.counter);  // 3
// mod.incCounter();
// console.log(mod.counter); // 3

// import { counter, incCounter } from "./add.js";
// console.log(counter); // 3
// incCounter();
// console.log(counter); // 4

// setState原理模拟

let isBatchingUpdate = true;
let queue = [{}]; // 队列存放临时的state
let state = {}; // 初始的state

const setState = (newSate = {}) => {
  if (isBatchingUpdate) {
    queue.push(state);
  } else {
    Object.assign(state, newSate);
  }
};

/** react 生命周期 */
const useEffect = () => {
  isBatchingUpdate = true; // 批量更新标志
  /**我们自己逻辑开始 */
  setState({ number: state.number + 1 });
  console.log(state); // 0
  setState((PreState) => ({ number: PreState.number + 1 }));
  setState({ number: state.number + 1 });
  console.log(state); // 0
  /**我们自己逻辑结束 */
  state = queue.reduce((newState, action) => {
    // 在这判断newState是不是函数
    return { ...newState, ...action };
  }, state);
  console.log(state);
  isBatchingUpdate = false; // 批量更新标志
};

const setTimeoutWrap = () => {
  setState({ a: 1 });
  console.log("setTimeoutWrap", state);
  setState({ a: 2 });
  console.log("setTimeoutWrap", state);
};

useEffect();

setTimeoutWrap();

console.info('start')
setImmediate(() => {
  console.info('setImmediate')
})
setTimeout(() => {
  console.info('timeout')
})
Promise.resolve().then(() => {
  console.info('promise then')
})
process.nextTick(() => {
  console.info('nextTick')
})
console.info('end')
