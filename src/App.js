import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Time from "./components/Time/Time";
import Container from "./components/Container/Container";

const App = () => {
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval(() => {
        setValue(value => value + 1);
    }, 1);

    return () => {if(interval) return clearInterval(interval)};
  });

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setValue(0);
    setIsRunning(false);
  };

  return (
    <Container>
      <Time>{value}</Time><br></br>
      <Button func={startTimer}>Start</Button>
      <Button func={stopTimer}>Stop</Button>
      <Button func={resetTimer}>Reset</Button>
    </Container>
  );
}

export default App;
