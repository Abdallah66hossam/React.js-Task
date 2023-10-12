import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  return <main>{isLoading ? <Loading /> : <Home />}</main>;
};

export default App;
