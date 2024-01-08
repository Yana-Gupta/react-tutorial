# Topics
- Let's Code
- Lets get Hooked


# React Hooks
- Normal JS utility function 
- useState() - React Variable
- useEffect()

# React DOM 



# Reconciliation Algorithm ( React Fiber )
- In React 16 a new algorithm came to update the DOM faster and it was called Reconcialtion Algorithm.
- After React 16 it was named React Fiber.


# Assignment

## Reference 
https://javascript.info/import-export 

1. What is the difference between Named Export, Default export and * as export?
- Named Export 
```js
function main() {
}
const b = 10;
export = {
    main, b
}
```

```js
export function main () {}
export const b = 10;
```

- Default Export 
```js
function another() {}
export default another;
```
- * as export 
It is used in reexporting. 
We have a function say user in user.js like 
```js
export default const = () => {
    return ()
}

```

Now we like to re-export it in any other module say "order.js"
```javascript
export * from "./user.js" // It is used to export named exports
export {default} from "./user.js" // It is used to export default exports
```

2. Importance of `config.js` file 
There are the configuration files. They allow you to customize how you interact with an application or how an application interacats with the rest of your system. 
These files have multiple formats : - 
    1. YAML
    2. JSON
    3. XML
    4. INI

3. What are React Hooks?
React Hooks are the inbuilt function in React that react provides. The usecase of these function includes from creating state variables to doing efficient DOM manuipulation.

4. What is useState Hook?
useState hooks is required to create State Varibles. Whenever these state variables are changed they rerender their component. 