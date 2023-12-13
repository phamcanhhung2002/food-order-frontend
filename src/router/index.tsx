import { Route, Routes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";
import PrivateRoutes from "./PrivateRoutes";
import DefaultLayout from "../layout";
import NotFound from "../pages/notFound";
import RequireAuth from "../components/auth/RequireAuth";

const RouterList = () => {
  return (
    <Routes>
      {GeneralRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<DefaultLayout>{route.element}</DefaultLayout>}
        />
      ))}
      <Route element={<RequireAuth />}>
        {PrivateRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
      </Route>
      <Route
        path="*"
        element={
          <DefaultLayout>
            <NotFound />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default RouterList;
