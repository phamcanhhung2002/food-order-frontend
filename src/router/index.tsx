import { Route, Routes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";
import DefaultLayout from "../layout";
import NotFound from "../pages/notFound";


const RouterList = () => {
  return (
    <Routes>
      {
        GeneralRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <DefaultLayout>
              {
                route.element
              }
            </DefaultLayout>
          } />
        ))
      }
      <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
    </Routes>
  )
}

export default RouterList