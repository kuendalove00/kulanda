import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouteName } from "./AppRouteName";
import { Login } from "../pages/login/index";
import { Home } from "../pages/home/index";
import { AddProduct } from "../pages/product/add/index";
import { EditProduct } from "../pages/product/edit/index";
import { ListProduct } from "../pages/product/list/index";
import { AddStore } from "../pages/store/add/index";
import { EditStore } from "../pages/store/edit/index";
import { ListStore } from "../pages/store/list/index";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {console.log("LOGIN: "+AppRouteName.login)}
        <Route path={AppRouteName.index} element={<Login />} />
        <Route path={AppRouteName.login} element={<Login />} />
        <Route path={AppRouteName.home} element={<Home />} />
        <Route path={AppRouteName.product.add} element={<AddProduct />} />
        <Route path={AppRouteName.product.edit} element={<EditProduct />} />
        <Route path={AppRouteName.product.list} element={<ListProduct />} />
        <Route path={AppRouteName.store.add} element={<AddStore />} />
        <Route path={AppRouteName.store.edit} element={<EditStore />} />
        <Route path={AppRouteName.store.list} element={<ListStore />} />
      </Routes>
    </BrowserRouter>
  );
};
