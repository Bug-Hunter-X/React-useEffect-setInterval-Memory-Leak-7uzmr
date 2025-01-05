```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Correct: Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```