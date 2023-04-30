import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css"

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(()=>import('./components/Home'))
const AllTours = lazy(()=>import('./components/AllTours'))
const Profile = lazy(()=>import('./components/Profile'))
const App = () => {
  return (
    <>
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route  element={<Navbar />}>
            <Route path="/"> 
              <Route index element={<Home/>} />
              <Route path="all-tours" element={<AllTours/>} />
              <Route path="profile" element={<Profile/>} />

            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
