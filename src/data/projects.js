
import tennis from "../images/project/tennis.png"
import pastel from "../images/project/pastel.png"
import bazar from "../images/project/bazar_shop.png"

import shopcv from "../images/project/shopping.png"
export const ProjectData = [
  {
    id: 1,
    title: `Tennis App`,
    about:
      `
      Implementa solicitudes de Api Rest con React,
      usando Spring boot como backend y base de datos PostgreSql.
      Con ranking de usuarios y  creacion del juego por partido y torneo.`,

    tags: ["React", "spring boot", "PostgreSql", "axios", "JUnit","mockito"],
    demo: "https://tennis-app.herokuapp.com/",
    github: "https://github.com/xyeison2010/Tennis",
    image: `${tennis}`,

  },
  {
    id: 2,
    title: "Bazar Shop",
    about:
      `Bazar Shop hecha en React,
      proporciona un interfaz 
      para el control de ventas en el cual se puede filtrar por rango, categorias
    y guardar favoritos. 
    
    `,
    tags: ["React", "responsive", "hooks", "Sass", "router"],
    demo: "https://bazar-shop.up.railway.app/",
    github: "https://github.com/xyeison2010/bazar-shop-app",
    image:
      `${bazar}`,

  },
  {
    id: 3,
    title: 'Shopping Cart',
    about:
    `Aplicación de ecommerce muy completa, con carrito de compras, roles de usuarios,
    el admin puede visualizar y agregar productos. \n 
   Para la seguridad use Spring security con OAuth2.0.
     `,
    tags: ['spring boot', 'Thymeleaf',"MySql", "spring security", "oauth" ],
    demo: "",
    github: "https://github.com/xyeison2010/shopping-Cart",
    image:
      `${shopcv}`,
  },
  {
    id: 4,
    title: "Pastry Shop",
    about:
      `Es una aplicación para un mercado de dulcerias con 100% flexbox y grid,
       actualiza el menú de forma dinámica y realizar pedidos en tiempo real.`,
    tags: ["React", "css", "promise", "context"],
    demo: "https://pastry-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/pastry-shop-app",
    image:
      `${pastel}`,

  },

 


];
