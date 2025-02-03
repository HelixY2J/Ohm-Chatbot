import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingPage from "../Loading/LoadingPage";


const HeroPage = lazy(() => import("../Hero/HeroPage"))
const MainPage = lazy(() => import("../Main/Main"))



const PageRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route
            index
            element={

              <Suspense fallback={<LoadingPage />}>
                <HeroPage />
              </Suspense>
            }
          />
          <Route
            path="chat"
            element={
             
              <Suspense fallback={<LoadingPage />}>
                <MainPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    );
  };

  export default PageRoutes;