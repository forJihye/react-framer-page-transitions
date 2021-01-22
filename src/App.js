import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Contact from "./pages/Contact";
import Main from "./pages/Main";

function App() {
  const [isLanding, setIsLanding] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      isLanding && setIsLanding(false);
    });
    return unlisten;
  }, [isLanding, history]) 

  return <AnimatePresence exitBeforeEnter>
    <Switch>
      <Route path='/' exact component={(props) => <Main {...props} isLanding={isLanding} />} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </AnimatePresence>
}

export default App; 
