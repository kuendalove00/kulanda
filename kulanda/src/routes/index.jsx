import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouteName } from "./AppRouteName";
import { Login } from "../pages/login/index";
import { Home } from "../pages/admin/home/index";

//Admin 
import { AddStore } from "../pages/admin/store/add";
import { ListStore } from "../pages/admin/store/list";
import { AddCategory } from "../pages/admin/category/add/index";
import { ListCategory } from "../pages/admin/category/list/index"
import { AddCustomization } from "../pages/admin/customization/add/index";

import { AddProduct } from "../pages/owner/product/add/index";
import { ListProduct } from "../pages/owner/product/list/index";
import { AddBrand } from "../pages/owner/brand/add/index";
import { ListBrand } from "../pages/owner/brand/list/index";
import { AddModel} from "../pages/owner/model/add/index";
import { ListModel } from "../pages/owner/model/list/index";
import { AddSubcategory } from "../pages/owner/subcategory/add/index";
import { ListSubcategory } from "../pages/owner/subcategory/list/index";
import { PublicStore } from "../pages/store";
import { LoginStore } from "../pages/loginStore";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path={AppRouteName.storeLogin} element={<LoginStore />} />
        <Route path={AppRouteName.storeCliente} element={<PublicStore />} />
        <Route path={AppRouteName.index} element={<Login />} />
        <Route path={AppRouteName.login} element={<Login />} />
        <Route path={AppRouteName.home} element={<Home />} />
        <Route element={<Home />}>
          <Route path={AppRouteName.store.add} element={<AddStore />} />
          <Route path={AppRouteName.store.edit} element={<AddStore />} />
          <Route path={AppRouteName.store.list} element={<ListStore />} />
          <Route path={AppRouteName.category.add} element={<AddCategory />} />
          <Route path={AppRouteName.category.edit} element={<AddCategory />} />
          <Route path={AppRouteName.category.list} element={<ListCategory />} />
          <Route path={AppRouteName.store.customize} element={<AddCustomization />} />
          <Route path={AppRouteName.store.customize} element={<AddCustomization />} />

          <Route path={AppRouteName.product.add} element={<AddProduct />} />
          <Route path={AppRouteName.product.edit} element={<AddProduct />} />
          <Route path={AppRouteName.product.list} element={<ListProduct />} />
          <Route path={AppRouteName.brand.add} element={<AddBrand />} />
          <Route path={AppRouteName.brand.edit} element={<AddBrand />} />
          <Route path={AppRouteName.brand.list} element={<ListBrand />} />
          <Route path={AppRouteName.model.add} element={<AddModel />} />
          <Route path={AppRouteName.model.edit} element={<AddModel />} />
          <Route path={AppRouteName.model.list} element={<ListModel />} />
          <Route path={AppRouteName.subcategory.add} element={<AddSubcategory />} />
          <Route path={AppRouteName.subcategory.edit} element={<AddSubcategory />} />
          <Route path={AppRouteName.subcategory.list} element={<ListSubcategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
