# 第一讲，仓库构建

## 为什么要构建 monorepo，monorepo 是什么？

### monorepo 的含义

Monorepo 最早的出处是软件开发策略的一个分支，”mono” 表示单一 “repo” 是”repository”的缩写，意为多个项目共用一个代码库来管理依赖关系，同一套配置文件，统一构建部署流程等等。

### 多仓的缺点在哪里


### mono 做了什么？

1. 更好的代码复用，可以让所有项目代码集中于单一仓库，易于抽离出共用的业务组件或工具。
2. 整体的构建、测试逻辑统一，方便协作。

## mono 构建有哪些方法？

### lerna

### yarn / pnpm / npm 

### 这两者之间不同点是？



## 使用 pnpm 构建 mono

### 主要步骤

1. 添加 yaml 文件

```yml
packages:
  - "packages/**"
```

2. 创建项目文件和第三方库文件夹


进行测试：

### 安装测试环境

#### 安装 eslint 与 配置
- eslint 和 pretierr 如何配置


### 安装 typescript 配置

- tsc, ts-loader, @babel/preset-typescript 有什么区别？


### 如何配置 react 环境？


# 第二讲 react 环境安装

## 如何选择合理的组件库？

### headless with styled ， 应该怎么选？

## 典型的 css 方案有哪些？

## 如何选择合理的状态管理？

- zustand ?
- redux ?
- mobx ?

## 如何构建一个组件库？

### 组件库打包的方案有哪些？

一般情况下，我们需要“三证齐全”

#### umd

#### cjs

#### esm 


### 组件库和前端项目，到底有什么区别？

### 使用 rollup 构建组件库。

