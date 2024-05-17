# React Tutorial

A react tutorial by teacher Akshay Saini

### Higher Order Component

Takes a component and return another component with some manipulations into the passed component

### Report Web Vitals

By default, Create React App includes a performance relayer that allows you to measure and analyze the performance of your application using different metrics. To measure any of the supported metrics, you only need to pass a function into the reportWebVitals function in index.js.

### StrictMode

Strict Mode enables the following development-only behaviors:

- Your components will re-render an extra time to find bugs caused by impure rendering.
- Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
- Your components will be checked for usage of deprecated APIs.

###

The function `func` will be called right away.

```js
<button onClick={func}> Click Me </button>
```

Creating a callback function in case some parameter are passed to the `func` they can be passed.

```js
<button
  onClick={() => {
    func()
  }}
>
  {" "}
  Click Me{" "}
</button>
```

### Use TypeScript with react 

1. Download `React` and `TypeScript` package 

2. Make all the files with `tsx/ts` extension 

3. Make a tsconfig.json file for the configuration of typescript 

4. Run `npx typescript` for the compilation of typescript 

5. Run `npm start` commmand
