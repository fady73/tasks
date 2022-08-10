import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

import NotFound from "./component/NotFound/NotFound";
import useLocalStorage from "use-local-storage";

import "./App.css";

export default function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <button onClick={switchTheme}>change theme</button>
      <React.Suspense fallback={() => <>loading</>}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={() => route.component}
              />
            ) : null;
          })}
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </React.Suspense>
    </div>
  );
}
