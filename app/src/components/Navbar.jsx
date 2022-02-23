import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Director from "../pages/Director";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieId from "./MovieId";

const linkClass =
  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

export default function App() {
  return (
    <Router>
      <div>
        <ul className="bg-white border-gray-200 sm:px-10 py-1.5  dark:bg-gray-800">
          <div className="container ">
            <ul className="flex flex-col justify-center mt-3 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
              <li className="min-w-min">
                <Link to="/" className={linkClass}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/director" className={linkClass}>
                  Directores
                </Link>
              </li>
              <li>
                <Link to="/login" className={linkClass}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/director" component={Director} />
          <Route path="/movie" component={MovieId} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
