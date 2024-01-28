import React from 'react';

export const AppRouteName = {
    other: "*",
    index: "/login",
    login: "/login",
    home: "/inicio",
    product: {
        list: "/produtos/listagem",
        add: "/produtos/registar",
        edit: "/produtos/editar",
    },
    store: {
        list: "/lojas/listagem",
        add: "/lojas/registar",
        edit: "/lojas/editar",
        customize: "/lojas/customizar"
    },
    category: {
        list: "/categorias/listagem",
        add: "/categorias/registar",
        edit: "/categorias/editar",
    },
    subcategory: {
        list: "/subcategorias/listagem",
        add: "/subcategorias/registar",
        edit: "/subcategorias/editar",
    },
    brand: {
        list: "/marcas/listagem",
        add: "/marcas/registar",
        edit: "/marcas/editar",
    },
    model: {
        list: "/modelos/listagem",
        add: "/modelos/registar",
        edit: "/modelos/editar",
    },
    user: {
        list: "/usuarios/listagem",
        add: "/usuarios/registar",
        edit: "/usuarios/editar",
    },
    pagenotfound: {
        error: "/notfound"
    }
}

