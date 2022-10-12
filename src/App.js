import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ImagePage from "./pages/Todo/ImagePage";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import { useGetUser } from "./hooks";

function App() {
  // eslint-disable-next-line
  const [{ user, isLoading, isError }, dispatch] = useGetUser();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos">
          {user ? <ImagePage user={user} dispatch={dispatch} /> : isLoading ? <></> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/todos" /> : isLoading ? <></> : <Login dispatch={dispatch}/>}
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
