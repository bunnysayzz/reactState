import React, { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());

      setTimeout(updateCurrentTime, 1000);
    };

    updateCurrentTime();

    return () => {
      clearTimeout(updateCurrentTime);
    };
  }, []);
  return (
    <div>
    <div className="App">
      <div>{currentTime.toLocaleTimeString()}</div>
    </div>
    </div>
  );
}
