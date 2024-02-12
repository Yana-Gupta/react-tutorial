# Redux

state management library - handles data | manages store

Redux alternative - Zustand

- Install @reduxjs/toolkit and react-redux

## Redux Toolkit Architecture

### Redux Store

It is kept in central place and data is stored in one store. All the data is kept inside the object. There are slices inside the redux store. A slice is a object inside our redux store. To keep data seperate we add slices inside our redux store.

### How to write data

You need to dispatch an action. The action calls a function. And the function internally modifies the cart. The function is known as dispatchter.

### How to read data

Selector is used to read the data from the slice. If you use a selector inside the component, then you component becomes subscribed to our store, so while using selector component gets subscribed to the store and it updates automatically.

## Reducer

The function that will be dispatched is reducer.

action - dispatch - reducer f(n) - store

component - subscribed using selector - store

## Provider

Provide the store to the react. from `react-redux`

## Slice

```js

import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
  name: "cart",
  initialSlice: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      state.items.pop()
    },
    clearItem: (state) => [state.items.clear()],
  },
})
export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer;

```

### IMMER Libaray 

The library that `redux` used to create immutable state. 

### useContext vs Redux 

`useContext` is useful for small scale application where you not need to change your state much

`Redux` is useful if your application grows larger. 