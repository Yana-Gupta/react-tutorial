## React Developer Tool

### Component

To view the state of all the components in out React Application. We can say it will show Virtual DOM of our React Applications and all the data inside each Component.

### Profile

We can record our web applications with all its actions and can view all the actions, and their time taken N all through it.

## Controlled and Uncontrolled Components

### Controlled Component

When a component that is mapped over and our main components which is rendered it, has all the control of the Component. Then it is a `Controlled Component`.

### Uncontrolled Component

When the main component which is rendering the child component does not have the control of that component then it is known as the `Uncontrolled Component`.

## Lifting the State Up

Just giving the state variable into higher component => Lifting its state up

## React Store

To keep the data at a central place.

`Eg.` Login Data, Theme Data

### useContext

It is like a global place where data can be kept. We hold some data inside our context and this data can be used anywhere in our app.

### How to use it?

1. CreateContext - a named import

```js
const AuthContext = createContext({
  name: "Yana Gupta",
})
```

2. UseContext - a named import

```js
import { useContext } from "react"
import AuthContext from "./AuthContext"

const { name } = useContext(AuthContext)
```

Can also be used as. In old cold where class components are used, functional components can not be used there. You can access your context data like the example below:

```js
import AuthContext from "./AuthContext"

;<AuthContext.Consumer>{({ name }) => <h1> {name} </h1>}</AuthContext.Consumer>
```

That's how to use context api from `react`.

`P.S:` The data that could be used multiple times can be put inside context.

### Providers

You can wrap your app inside `Context Provider` to connect with the context.

You can also modify the data inside the context.

There can also be nested contexts, also in your application. Eg.

```js
const App = () => {
  return (
    <AuthContext.Provider value={{ name: "something else" }}>
      <div>
        <Header/>
        <AuthContext.Provider value={{ name: "something else 2" }}>
        <Footer/>
        </AuthContext.Provider>
      </div>
    </AuthContext.Provider>
  )
}
```

In the above example the value `something else2` will only be for Footer elsewhere `something else` will be provided.

### Data Management Library - Redux

## What is Prop Drilling?

Prop drilling occurs when a parent component generate its state and passed it down as props to its children components that do not consume the props insted, they pass it down to another component that finally consumes it.

## If you don’t pass a value to the provider does it take the default value?

Yes, it does take the default value.
