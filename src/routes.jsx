import { createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home'
import Movie from './components/Movie';
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import ErrorPage from "./components/ErrorPage";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="/actors" element={<Actors />} />
    <Route path="/directors" element={<Directors />} />
    <Route path="*" element={<ErrorPage />} />
  </>
);

export default routes;