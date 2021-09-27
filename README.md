## React custom Hooks

### useTimeout

This hook accepts 2 parameters - callback function and delay in milliseconds. And returns an object with 3 functions:

- delayedFunction - callback function you provided to useTimeout as the first parameter that will be executed, once it's
  called, after the number of milliseconds you provided as the second parameter to useTimeout
- resetTimeout - allows you to reset the timeout (i.e. restart it) if it's not yet timed out :) (i.e. executed)
- cancelTimeout - allows you to cancel timeout (i.e. clearTimeout)

```javascript
const Timeout = () => {

  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter => counter + 1);
  }, []);

  const {
    delayedFunction: incrementWithTimeout,
    resetTimeout: resetIncrementTimeout,
    cancelTimeout: dropIncrementTimeout
  } = useTimeout(increment, 1000);

  return (
      <>
        <p>{counter}</p>
        <div>
          <button onClick={incrementWithTimeout}>INCREMENT AFTER 1 SEC</button>
          <button onClick={resetIncrementTimeout}>RESET</button>
          <button onClick={dropIncrementTimeout}>DROP</button>
        </div>
      </>
  );
}
```

### useInterval

This hook accepts 2 parameters - callback function and delay in milliseconds. And returns an object with 2 functions:

- repeatedFunction - callback function you provided to useInterval as the first parameter that will be repeated, once
  it's called, every XXX milliseconds you provided as the second parameter
- cancelInterval - allows you to cancel the current and all the following executions of the repeatedFunction

```javascript
const Interval = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter => counter + 1);
  };

  const {
    repeatedFunction: IncrementEverySecond,
    cancelInterval: cancelIncrement,
  } = useTimeout(increment, 1000);

  return (
      <>
        <p>{counter}</p>
        <div>
          <button onClick={IncrementEverySecond}>INCREMENT EVERY SECOND</button>
          <button onClick={cancelIncrement}>CANCEL INCREMENT</button>
        </div>
      </>
  );
}
```
