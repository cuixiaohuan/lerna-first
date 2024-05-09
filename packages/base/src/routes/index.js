import React, { useEffect } from "react";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Main from "../layouts/Main";

import P4 from "../pages/p4";

import P5 from "../pages/p5";

import P6 from "../pages/p6";

import P7 from "../pages/p7";

import P8 from "../pages/p8";

import ErrorPage from "../pages/error";

const RouterGuard = () => {
  let location = useLocation();

  const menuList = [{
    path: "/p4",
    pathname: "p4",
  }, {
    path: "/p5",
    pathname: "p5",
  }, {
    path: "/p6",
    pathname: "p6",
  }, {
    path: "/p7",
    pathname: "p7",
  }, {
    path: "/p8",
    pathname: "p8",
  }];

  let { pathname } = location;

  // 需要修改 用户输入了/ssa/121/1 乱七八糟的路由
  pathname = pathname.replace(/\/(\d{1,})$/, '/:id');

  let current = menuList.find(item => item.path === pathname);
  console.log(current);

  if (!current && pathname !== '/' && pathname !== '/welcome') {
    return (
      <Main>
        <Routes>
          <Route path="/" element={<Navigate to="/error" />} ></Route>
        </Routes>
      </Main>
    );
  }
  // 需要判断权限的登录后结构页面

  return (
    <Main>
      <Routes>
        <Route path="/p4" element={<P4 />}></Route>

        <Route path="/p5" element={<P5 />}></Route>

        <Route path="/p6" element={<P6 />}></Route>

        <Route path="/p7" element={<P7 />}></Route>

        <Route path="/p8" element={<P8 />}></Route>

        <Route path="/error" element={<ErrorPage />}></Route>

        <Route path="/" element={<Navigate to="/welcome" />}>

        </Route>
      </Routes>
    </Main>
  );
};

export default RouterGuard;
