import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Main from "./components/Main";
import InitialTransition from './components/InitialTransition';
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(false);
  useEffect(() => {
    setIsFirstMount(true)
  }, []);
  return <>
    {isFirstMount && <InitialTransition />}
    <AnimatePresence exitBeforeEnter>
      <Header />
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact component={Main} />
        <Route path='/blog' component={Blog} />
      </Switch>
    </AnimatePresence>
  </>;
}

export default App;
