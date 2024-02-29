import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WebNormalArticle = React.lazy(() => import("pages/WebNormalArticle"));
const WebTechArticle = React.lazy(() => import("pages/WebTechArticle"));
const WebMovieArticle = React.lazy(() => import("pages/WebMovieArticle"));
const WebFoodArticle = React.lazy(() => import("pages/WebFoodArticle"));
const WebVideos = React.lazy(() => import("pages/WebVideos"));
const WebWebStories = React.lazy(() => import("pages/WebWebStories"));
const WebExploreMore = React.lazy(() => import("pages/WebExploreMore"));
const WebEventsFestivals = React.lazy(() => import("pages/WebEventsFestivals"));
const WebWeekendGateways = React.lazy(() => import("pages/WebWeekendGateways"));
const WebShopping = React.lazy(() => import("pages/WebShopping"));
const WebFoodDining = React.lazy(() => import("pages/WebFoodDining"));
const WebCitiesHyderabad = React.lazy(() => import("./pages/WebCitiesHyderabad/index"));
const WebHome = React.lazy(() => import("pages/WebHome"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<WebHome />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/webcitieshyderabad" element={<WebCitiesHyderabad />} />
          <Route path="/webfooddining" element={<WebFoodDining />} />
          <Route path="/webshopping" element={<WebShopping />} />
          <Route path="/webweekendgateways" element={<WebWeekendGateways />} />
          <Route path="/webeventsfestivals" element={<WebEventsFestivals />} />
          <Route path="/webexploremore" element={<WebExploreMore />} />
          <Route path="/webwebstories" element={<WebWebStories />} />
          <Route path="/webvideos" element={<WebVideos />} />
          <Route path="/webfoodarticle" element={<WebFoodArticle />} />
          <Route path="/webmoviearticle" element={<WebMovieArticle />} />
          <Route path="/webtecharticle" element={<WebTechArticle />} />
          <Route path="/webnormalarticle" element={<WebNormalArticle />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
