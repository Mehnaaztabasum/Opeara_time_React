import React, { useState } from "react";
function Time() {
  const now = new Date().toLocaleTimeString();

  const [time, settime] = useState(now);

  function timeupdated() {
    const newtime = new Date().toLocaleTimeString();
    settime(newtime);
  }
  return (
    <div className="container">
      <h2>{time}</h2>

      <button onClick={timeupdated}>Get time</button>
    </div>
  );
}

export default Time;
