## useMemo

It is a React hook that let us cache the result of a calculation between re-renders.

It is used to cache when our component re-renders again and again.

A follow on -

Problem: When the theme is changed why the prime is calculated again and again.

That's why - we need to cache the data, so that it is not called again and again as it is a heavy problem.

### Syntax

```js

const cachedValue = useMemo(()=> func(), [dependecy array])

```


## useCallback

Caches the function definition between re-renders.

```js

const cachedfn = useCallback(fn, dependencies)

```


## useRef

Let's us reference a value that's not needed for redering.