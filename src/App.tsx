import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ip, setIp] = useState();

  useEffect(() => {
    const req = async () => {
      const a = await fetch("https://api.ipify.org/?format=json");
      const data = await a.json();
      setIp(data.ip);
    };
    req();
  }, []);

  return (
    <>
      <h3>{ip}</h3>
    </>
  );
}

export default App;
