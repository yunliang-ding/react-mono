# jsx 本质

- 本质是React.createElement的语法糖返回的是一个 vnode 节点 (虚拟dom节点)

```jsx
// jsx基本用法
<div className="container">
  <p>tet</p>
  <img src={imgSrc} />
</div>
// 编译后 https://babeljs.io/repl
React.createElement(
  "div",
  {
    className: "container"
  },
  React.createElement("p", null, "tet"),
  React.createElement("img", {
    src: imgSrc
  })
);
```

## React合成事件机制

- React16事件绑定到document上
- React17事件绑定到root组件上，有利于多个react版本共存，例如微前端
- event不是原生的，是合成事件对象