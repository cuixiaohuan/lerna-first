import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";


import Main from "../layouts/Main";
import P4 from "../pages/p4";
import P5 from "../pages/p5";

import ErrorPage from "../pages/error";


const RouterGuard = () => {
  let location = useLocation();

  const menuList = [{
    path: "/p4",
    pathname: "p4",
  }, {
    path: "/p5",
    pathname: "p5",
  }];

  let { pathname } = location;

  // 需要修改 用户输入了/ssa/121/1 乱七八糟的路由
  pathname = pathname.replace(/\/(\d{1,})$/, '/:id');

  //   // 不需要登录的页面
  //   if (pathname.indexOf("/login") > -1) {
  //     return (
  //       <Switch>
  //         <Route path="/login" component={Login} />
  //         <Redirect to="/login" />
  //       </Switch>
  //     );
  //   }

  let current = menuList.find(item => item.path === pathname);
  console.log(current);

  if (!current && pathname !== '/' && pathname !== '/welcome') {
    console.log("aaa");
    return (
      <Main>
        <Routes>
          <Route path="/" element={<Navigate to="/error" />} >

          </Route>

        </Routes>
      </Main>
    );
  }
  // 需要判断权限的登录后结构页面
  console.log("bbbb");
  return (
    <Main>
      <Routes>
        <Route path="/p4" element={<P4 />}>

        </Route>
        
        <Route path="/p5" element={<P5 />}>

        </Route>
        <Route path="/error" element={<ErrorPage />}>

        </Route>
        <Route path="/" element={<Navigate to="/welcome" />}>

        </Route>
      </Routes>
    </Main>
  );
};

export default RouterGuard;
