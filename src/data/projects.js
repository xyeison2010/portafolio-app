
import tennis from "../images/project/tennis.png"
import pastel from "../images/project/pastel.png"
import bazar from "../images/project/bazar_shop.png"
import slide from "../images/project/fade_slide.png"
export const ProjectData = [
  {
    id: 1,
    title: `Tennis App`,
    about:
      `
      Implementa solicitudes de API con React,
      usando Spring Boot como backend y base de datos PostgreSql.
      Con ranking de usuarios y  creacion del juego por partido y torneo.`,

    tags: ["React", "Spring Boot", "PostgreSql", "axios", "bootstrap","api rest"],
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
    tags: ["React", "api", "hooks", "sass", "tailwind"],
    demo: "https://bazar-shop.up.railway.app/",
    github: "https://github.com/xyeison2010/bazar-shop-app",
    image:
      `${bazar}`,

  },
  {
    id: 3,
    title: "Pastry Shop",
    about:
      `Es una aplicación para un mercado de dulcerias con 100% flexbox y grid,
       actualiza el menú de forma dinámica y realizar pedidos en tiempo real.`,
    tags: ["React", "api", "promise", "context"],
    demo: "https://pastry-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/pastry-shop-app",
    image:
      `${pastel}`,

  },

  {
    id: 4,
    title: "Animated Slides",
    about:
      `Transiciones de diapositivas de CSS y
       el código jQuery para calcular la siguiente diapositiva,
      lo más importante es que responde a todo el ancho.
      `,
    tags: [

      "css",
      "jquery",
      "responsive",
      "javascript"
    ],
    demo: "",
    github: "https://github.com/xyeison2010/AnimatedSlides",
    image:
      `${slide}`,
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
