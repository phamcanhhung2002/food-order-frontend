import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

import { HEADER_SITEMAP, HEADER_ACTION } from "../../constant/sitemap";
import React from "react";
import { AppstoreOutlined, CloseCircleTwoTone } from "@ant-design/icons";
import { Badge, Divider, Drawer, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { logOut } from "../../state/user/userSlide";
import { appApi } from "../../api/appApi";

const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const currentUrl = useLocation().pathname;
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const [headerSticked, setHeaderSticked] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleLogout = async () => {
    await appApi.logOut();
    dispatch(logOut());
    navigate("/login", { replace: true });
  };

  window.onscroll = () => {
    if (!headerSticked && window.scrollY >= 24) {
      setHeaderSticked(true);
    } else if (headerSticked && window.scrollY < 24) {
      setHeaderSticked(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`flex items-center h-16 px-[10vw] mt-6 sticky top-0  
      ${headerSticked && currentUrl === "/" && "bg-white z-30 shadow-md"} ${
        headerSticked && currentUrl !== "/" && "bg-[#101721] z-30 shadow-md "
      } `}
    >
      <Link
        to="/"
        className={`font-sans text-2xl font-bold mr-16 ${
          currentUrl !== "/" && "text-white"
        } relative transition-all  ${openDrawer ? "-left-[146px]" : "left-0"}`}
      >
        F<span className="text-primary">oo</span>
        dtuck
      </Link>

      <nav className="block max-lg:hidden">
        {HEADER_SITEMAP.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`text-text ml-8 ${
              currentUrl !== "/" && "text-white"
            } relative 
              ${
                currentUrl === item.path
                  ? "font-bold after:block after:w-6 after:h-0.5 after:bg-primary after:absolute after:left-0 animate-spin"
                  : "before:hidden before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary before:absolute before:left-1/2 before:-top-2 hover:before:block before:ease-in before:duration-200"
              }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="lg:flex hidden items-center ml-auto">
        {HEADER_ACTION.map((item, index) =>
          item.title === "Login" && user.accessToken ? (
            <Popover
              title={user.name}
              content={<a onClick={handleLogout}>Logout</a>}
              key={index}
            >
              <div
                className={`text-white w-10 h-10 ml-4 flex items-center justify-center rounded-full hover:bg-[#333] hover:cursor-pointer ${
                  headerSticked &&
                  currentUrl === "/" &&
                  "!text-[#333] hover:bg-[#ccc]"
                }`}
              >
                {item.icon}
              </div>
            </Popover>
          ) : (
            <div
              key={index}
              onClick={() => item.path && navigate(item.path)}
              className={`text-white w-10 h-10 ml-4 flex items-center justify-center rounded-full hover:bg-[#333] hover:cursor-pointer ${
                headerSticked &&
                currentUrl === "/" &&
                "!text-[#333] hover:bg-[#ccc]"
              }`}
            >
              {item.title !== "Cart" ? (
                item.icon
              ) : (
                <Badge
                  count={user.numOfFoodsInOrder}
                  size="small"
                  className={`text-white text-base  ${
                    headerSticked && currentUrl === "/" && "!text-[#333]"
                  }`}
                >
                  {item.icon}
                </Badge>
              )}
            </div>
          )
        )}
      </div>

      <div
        className={`lg:hidden block ml-auto text-2xl pd-4 ${
          currentUrl !== "/" && "text-white"
        }`}
        onClick={() => setOpenDrawer(true)}
      >
        <AppstoreOutlined />
      </div>
      <Drawer
        placement="right"
        open={openDrawer}
        width={240}
        closeIcon={false}
        title={
          <div className="flex justify-between">
            <Link to="/" className={`font-sans text-2xl font-bold mr-16 `}>
              F<span className="text-primary">oo</span>
              dtuck
            </Link>
            <CloseCircleTwoTone
              className="ml-auto text-2xl !text-primary"
              onClick={() => setOpenDrawer(false)}
            />
          </div>
        }
      >
        <nav className="flex flex-col">
          {HEADER_SITEMAP.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`text-text relative text-xl p-2 pt-0 
                  ${currentUrl === item.path && "font-bold !text-primary"}`}
              onClick={() => setOpenDrawer((prv) => !prv)}
            >
              {item.title}
            </Link>
          ))}

          <Divider />
          {HEADER_ACTION.map((item, index) => (
            <div
              key={index}
              onClick={
                item.title === "Login" && user.accessToken
                  ? handleLogout
                  : () => {
                      item.path && navigate(item.path);
                      setOpenDrawer((prv) => !prv);
                    }
              }
              className={`text-text rounded-full text-xl p-2 w-full`}
            >
              {item.icon}
              <span className="ml-2">
                {item.title === "Login" && user.accessToken
                  ? "Logout"
                  : item.title}
              </span>
            </div>
          ))}
        </nav>
      </Drawer>
      <div></div>
    </header>
  );
};

export default Header;
