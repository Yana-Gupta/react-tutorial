# Topics

- Finding the path

# React-router-dom

- createBrowserRouter, RouterProvider
  RouterProvider - to provide the route

CreateBrowserRouter - to create the route

- Link from react-router-dom
  It doesn't reload the whole page as anchor tag does.

There is two side of routing

- `Client Side Routing` - when `link` from `react-router-dom` is used is client side routing
- `Server Side Routing` - when `anchor` tag is used to get another page

How it is server-side routing?

When about page is requested it makes the request from our react application and then page is sent. It will make the network call with you application.

How it is client-side routing?

It will not make a network call. It will the load the component down there.

useRouteError Hook

We can use this hook we can make our error component

### Why key is given while using map function ?

Each div is given unique key. It is necessary because each div is given the key when there is any changes if the key is not given the React re-render whole component again. But if key is given then it only re-renders the component or the elemnt with the change. That's why it is necessary. Also it is preffered to not give indexes as key to your element.

### What would happen if we do console.log(useState())?

useState is a function provided by React to create a state varaible, so as it is function a function will be printed in browser. It takes an argument initialValue.

### How will useEffect behave if we don't add a dependency array ?

If we don't add dependency array then `useEffect` will run after any render on the page. The behaviour is more like the `ComponentDidMount`.

If dependency Array is empty then it only will run on the initial rendering of the page, not on any change of any state variable on the page.

If there are some state variables inside the dependency Array then upon changing each of the state variable `useEffect` will run.


Single Page Application short form SPA.


### https://formik.org/