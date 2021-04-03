import { useState } from "react";
import Header from "./Header";
import Mainboard from "./Mainboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PinDetail from "./components/PinDetail";

function App() {
  const [search, setSearch] = useState("car");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Switch>
        <Route path="/" exact>
          <Mainboard search={search} />
        </Route>
        <Route path="/pin/:id" component={PinDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
