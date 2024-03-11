# Testing

Two types of Testing:

1. Manual Testing
2. By Code

### Type of testing ( developer )

- Unit Testing - Testing in isolation 
- Integration Testing - when mutliple components are involved in talking to each other
- End to End Testing (E2E) - Testing the application since when the user enters the application till the user leaves the application

### React Testing Library 

Uses Jest to test. Jest uses Babel. 

### Setting up testing in application 

- Install React Testing library
- Install Jest 
- Install Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest Configuration - npx jest --init
- Install JSDom Library
- Install Babel preset


### JS DOM 

Jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node. js. In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.


### Test Directory 

__test__ 

__ = Dunder Method



### usecase of render insider render

When there is some kind of state change. then use render inside act.


## Enzyme 

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. It was developed at Airbnb and later transferred to an independent organization.

The main difference between Enzyme Testing Library and React Testing Library is that Enzyme testing library is used for writing the unit test cases, and it is combined with jest. 

Whereas the react testing library the developer can write test cases for the real events. It is built on top of DOM testing library. 

### Reference 

https://www.testim.io/blog/react-testing-library-vs-enzyme/