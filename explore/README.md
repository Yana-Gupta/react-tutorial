# Topics
- Let's Code
- Lets get Hooked
- Exploring the world


# React Hooks
- Normal JS utility function 
- useState() - React Variable
- useEffect()

# React DOM 



# Reconciliation Algorithm ( React Fiber )
- In React 16 a new algorithm came to update the DOM faster and it was called Reconcialtion Algorithm.
- After React 16 it was named React Fiber.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

When the state is updated by setState a new tree is generated then it is comparted to the previous tree, then the places where actual changes have happened it is calculated. 


# Assignment

## Reference 
https://javascript.info/import-export 

1. What is the difference between Named Export, Default export and * as export?
- Named Export 
```js
function main() {}
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


## SHIMMER UI

Showing the fake data until the actual data doesn't loads.


## Conditional Rendering 

Rendering on the basis of condition is conditional Rendering


# Assignment - Exploring

1. What is a Microservice?
Making up a huge system with small services. Is used in large application, large developer size teams. 

2. What is Monolith Archtecture?
Everthing is inside one container. Small applications, small teams. 

> If you want to scale up your app one prefer using microservice architecture.

3. What is the difference between Monolith and Microservice?
The main difference is in microservice you break down your applications into smaller independent services, whereas in Monolith architecture the entire application is designed and structured as a single, tightly integrated unit.

4. What is optional Chaining?
(?.) opeartor accessen an object's property or calls a function. If the object accessed or function called using this operator is undefined or null , the expression short circuits and evaluates to undefined instead of throwing an error.

5. What is Shimmer UI?
If data in your application is not loaded then you show some fake UI to the user that is called Shimmer UI.

6. What is the difference between JS expression and JS statement.
The main difference between expressions and statements is that expressions evaluate to a value, while statements do not. This means that expressions can be used wherever a value is expected, such as in an assignment statement or as a function argument. Statements, on the other hand, can only be used where an action is expected, such as in a loop or conditional statement.

7. What is Condition Rendering, explain with a code example.
When you user if else or conditional statements statements to render your UI, it counts in conditional UI. Means, when you apply some sort of conditions to render the UI under any conditional statement, it comes under conditional rendering.

8. What is CORS?
Cross-origin resource sharing (CORS) is a browser mechanism that allows access to resources from a different domain than the one that served the first resource. CORS is a security feature that prevents cross-site scripting (XSS) attacks. 
CORS works by blocking web pages from making requests to a different domain than the one that served the web page. For example, a web page can embed cross-origin images, stylesheets, scripts, iframes, and videos. 
