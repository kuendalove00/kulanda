import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSitemap,
  faBook,
  faHouseUser,
  faChartPie,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../Icon";
import { AppRouteName } from "../../routes/AppRouteName";
import { useApp } from "../../pages/app";
import { useEffect } from "react";
import { service } from "../../services";

const MenuBar = () => {
  const { navigate } = useApp();


  const getProfile = async() => {

    const response = await service.auth.me();

    console.log("Data ", response.data);

    const username = response.data.name;

    setAuth({ username });

    console.log("Look Here", auth);

  }

  useEffect(() => {
  }, []);

  return (
    <Sidebar
      className="menuBar bg-white"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: "300px",
      }}
    >
      <Menu>
        <h1 className="logo pb-4" style={{ fontSize: 30, textAlign: "center" }}>
          KULANDA
        </h1>

        <MenuItem className="py-2" onClick={() => navigate(AppRouteName.home)}>
          <div className="flex items-center">
            <div className="flex -space-x-2 overflow-hidden py-4">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1"
                alt=""
              />
            </div>
            <div className="px-4">
              <h4 className="text-sm">Kuenda Mayeye</h4>
              <h4 className="text-xs">Admin</h4>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          className="item"
          onClick={() => navigate(AppRouteName.home)}
          icon={<Icon iconName={"fa-house"} />}
        >
          {" "}
          Inicio{" "}
        </MenuItem>
        <SubMenu icon={<Icon iconName={"fa-users"} />} label="Lojas">
          <MenuItem
            className="item"
            onClick={() => navigate(AppRouteName.store.add)}
            icon={<Icon iconName={"fa-user-plus"} />}
          >
            {" "}
            Registar Loja{" "}
          </MenuItem>
          <MenuItem
            className="item"
            onClick={() => navigate(AppRouteName.store.list)}
            icon={<Icon iconName={" fa-table-list"} />}
          >
            {" "}
            Listar Lojas{" "}
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<Icon iconName={"fa-flag"} />} label="Categorias">
          <MenuItem
            className="item"
            onClick={() => navigate(AppRouteName.product.add)}
            icon={<Icon iconName={"fa-users"} />}
          >
            {" "}
            Adicionar Categorias{" "}
          </MenuItem>
          <MenuItem
            className="item"
            onClick={() => navigate(AppRouteName.product.list)}
            icon={<Icon iconName={"fa-users"} />}
          >
            {" "}
            Listar Categorias{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<Icon iconName={"fa-flag"} />} label="Subcategorias">
          <MenuItem
            className="item"
            onClick={() => navigate(AppRouteName.product.add)}
            icon={<Icon iconName={"fa-users"} />}
          >
            {" "}
            Adicionar Subcategorias{" "}
          </MenuItem>
          <MenuItem
            className="item"
            onClick={() => navigate(AppRouteName.product.list)}
            icon={<Icon iconName={"fa-users"} />}
          >
            {" "}
            Listar subcategorias{" "}
          </MenuItem>
        </SubMenu>
        
        <MenuItem
          className="item"
          onClick={() => navigate(AppRouteName.home)}
          icon={<Icon iconName={"fa-arrow-right-from-bracket"} />}
        >
          {" "}
          Sair{" "}
        </MenuItem>
      </Menu>

      
    </Sidebar>
  );
};

export default MenuBar;
