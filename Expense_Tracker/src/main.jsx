import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainContent from "./components/Main-content/Main-content.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Analytics from "./components/Analytics/Analytics.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import Report from "./components/Report/Report.jsx";
import Budget from "./components/Budget/Budget.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Goals from "./components/Goals/Goals.jsx";
import Help from "./components/Help/Help.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route element={<MainContent />}>                  */}
        <Route index element={<Dashboard />} />              "/" inside MainContent
        {/* <Route path="" element = {<Dashboard />} /> */}
        <Route path="settings" element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />      
        <Route path="transactions" element={<Transactions />} />      
        <Route path="report" element={<Report />} />  
        <Route path="budget" element = {<Budget />} />    
        <Route path="categories" element = {<Categories />} />    
        <Route path="goals" element = {<Goals />} />
        <Route path="help" element = {<Help />} /> 
      {/* </Route> */}
    </Route>
  )
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<MainContent />}>
//         <Route path="settings" element={<Settings />} />
//       </Route>
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
