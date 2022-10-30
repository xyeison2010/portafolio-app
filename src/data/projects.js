
import tennis from "../images/tennis.png"
import shopping from "../images/shopping.png"
import pastel from "../images/pastel.png"
import restaurante from "../images/restaurante.png"
import bazar from "../images/bazar_shop.png"
export const ProjectData = [
  {
    id: 1,
    title: `Tennis App`,
    about:
      `¡Es el proyecto más interesante que he hecho !  
      Implementa solicitudes de API con React,
      usando Spring Boot como backend y base de datos PostgreSql.
      En el que tuve que  implementar los ranking de los usuarios
      y la creacion del juego por partido y torneo.`,
    tags: ["ReactJs", "Axios", "Spring Boot", "PostgreSql"],
    demo: "https://deploy-tennis.herokuapp.com/",
    github: "https://github.com/xyeison2010/Tennis",
    image:  `${tennis}`,
   
  },
  {
    id: 2,
    title: "Bazar Shop",
    about:
    `Bazar Shop hecha en React,
    con 100% flexbox y grid, en el cual se puede filtrar por rango ,categorias
    y guardar los favoritos, con las mejores practicas para que sea escalable. 
    
    `,
    tags: ["ReactJs","api","css grid"],
    demo: "https://restaurant3-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/restaurante",
    image: 
     `${bazar}`,
   
  },
  {
    id: 3,
    title: "Pastel Web",
    about:
      `Es una aplicación para un mercado de dulcerias que proporcionará una interfaz 
      para el control de venta,
       actualizar el menú de forma dinámica y realizar pedidos en tiempo real.`,
    tags: ["ReactJs","api","promise"],
    demo: "https://pasteleria-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/pasteleria-web",
    image: 
     `${pastel}`,
   
  }, 

 //las imagenes lo subire a imgur

  {
    id: 4,
    title: "Shopping Cart",
    about:
     `Construida con Thymeleaf, Css, Js para frontend,
     Spring Boot como backend y MySql. El sistema cuenta con dos roles
     usuarios y admin este contiene todos los privilegios de una tienda real.
      `,
    tags: [
    
      "Javascript",
      "Spring Boot",
      "Mysql",
      
 
    ],
   // demo: "www.example.com",
    github: "https://github.com/xyeison2010/shopping_cv",
    image:
      `${shopping}`,
  },
 
 
 /*  {
    id: 5,
    title: "Restaurant",
    about:
    ` Aplicación de lista de compras usando hooks. 
      Todos los datos se mantendrán en el almacenamiento local del usuario.`,
    tags: ["ReactJs"],
    demo: "https://restaurant3-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/restaurante",
    image: 
     `${restaurante}`,
   
  }, */
];
