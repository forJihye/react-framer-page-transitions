import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Main from "./pages/Main";

function App() {
  const location = useLocation();
  const history = useHistory();
  // const [isFirstMount, setIsFirstMount] = useState(true);

  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     isFirstMount && setIsFirstMount(false)
  //   });
  //   return unlisten;
  // }, [history, isFirstMount]);

  return <>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {/* <Route path='/' exact component={(props) => <Main isFirstMount={isFirstMount} {...props}  />} /> */}
        <Route path='/' exact component={Main} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </AnimatePresence>
  </>;
}

export default App;
