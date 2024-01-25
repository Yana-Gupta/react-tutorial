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


##### Single Page Application short form SPA.

### https://formik.org/


### Lesson - 9 Optimizing our app

Single Responsiblity Principle - A single entity ( maybe a function, class ) should have a single responsibility.

Modular fashion - Breaking down the code in smaller modules. So that the code becomes more maintainable.


#### Why do we use custom hooks?

To make the code modular.


### Linter 

Eslint - they will throw error when don't follow rules set.


### Code Splitting | Chunking | Dynamic Loading | Lazy Loading | On Demand Loading | Dynamic Import

Break down the app into smaller pieces. 

Don't load the page if it is not necessary. 

Load it when it is required. 


#### When and why do we need lazy()?

To reduce the size of the bundler we use lazy, if a part of applicaition is too heavy then we can use lazy loading to make the size of the intial bundle small and if you are provide one main service and another secondary service on your webpage then you can also use lazy there. Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed.



#### What is suspense?

`<Suspense>` lets us display the fallback until its children have finished loading. 

```javascript
<Suspense fallback={<JSX />}>
<Lazy_loading_component>
</Suspense>
```

- `Suspense` 
Props: 
- `Children` - The actual UI you intend to render. If children suspends while rendering. 
- `fallback` - An alternate UI to render in place of the actual UI if it has not finished the rendering. 



#### Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

Because in your bundler file the component we were using for the page was not avaiable and it has to be loaded, also before the render of page it was not rendered completely.

How to deal with the error: use Suspense.


#### Advantages and disadvantages of using this code splitting pattern?

###### Advantages 

- Faster Initial Page load
- Improved Performance
- Optimized Bandwidth Usage
- Efficient Caching
- Better Resource Usage

##### Disadvantages 

- Complexity - Implementing it can be an additional work in the project
- Loading delays - In smaller application if used, the user can experience a loading delays