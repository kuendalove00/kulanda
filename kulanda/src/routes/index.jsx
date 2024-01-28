import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouteName } from "./AppRouteName";
import { Login } from "../pages/login/index";
import { Home } from "../pages/admin/home/index";

//Admin 
import { AddStore } from "../pages/admin/store/add/index";
import { ListStore } from "../page/admin/store/list/index";
import { AddCategory } from "../pages/admin/category/add/index";
import { ListCategory } from "../page/admin/category/list/index";
import { AddCustomization } from "../pages/admin/customization/add/index";

import { AddProduct } from "../pages/owner/product/add/index";
import { ListProduct } from "../pages/owner/product/list/index";
import { AddBrand } from "../pages/owner/brand/add/index";
import { ListBrand } from "../pages/owner/product/list/index";
import { AddProduct } from "../pages/owner/product/add/index";
import { ListProduct } from "../pages/owner/product/list/index";
import { AddProduct } from "../pages/owner/product/add/index";
import { ListProduct } from "../pages/owner/product/list/index";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRouteName.index} element={<Login />} />
        <Route path={AppRouteName.login} element={<Login />} />
        <Route path={AppRouteName.home} element={<Home />} />
        <Route element={<Home />}>
          <Route path={AppRouteName.product.add} element={<AddProduct />} />
          <Route path={AppRouteName.product.list} element={<ListProduct />} />
          <Route path={AppRouteName.product.add} element={<AddCategory />} />
          <Route path={AppRouteName.product.list} element={<ListCategory />} />
          <Route path={AppRouteName.product.add} element={<AddCustomization />} />
          <Route path={AppRouteName.product.list} element={<ListProduct />} />
          <Route path={AppRouteName.product.add} element={<AddProduct />} />
          <Route path={AppRouteName.product.list} element={<ListProduct />} />
          <Route path={AppRouteName.product.add} element={<AddProduct />} />
          <Route path={AppRouteName.product.list} element={<ListProduct />} />
          <Route path={AppRouteName.product.add} element={<AddProduct />} />
          <Route path={AppRouteName.product.list} element={<ListProduct />} />
          <Route path={AppRouteName.store.add} element={<AddStore />} />
          <Route path={AppRouteName.store.list} element={<ListStore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
