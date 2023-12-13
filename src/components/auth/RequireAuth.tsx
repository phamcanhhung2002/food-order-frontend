import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const RequireAuth = () => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user);
  const accessToken = user.accessToken;
  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
