import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TopMenu from "./components/TopMenu/TopMenu";
import HomePage from "./pages/HomePage";
import "./App.css";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopMenu />
      <Switch>
        <Route path="/dathenaapp" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
