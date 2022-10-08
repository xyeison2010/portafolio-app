
import tennis from "../images/tennis.png"
import shopping from "../images/shopping.png"
import pastel from "../images/pastel.png"
import restaurante from "../images/restaurante.png"
export const ProjectData = [
  {
    id: 1,
    title: "Pastel Web",
    about:
      `Es una aplicación para un mercado de dulcerias que proporcionará una interfaz 
      para el control de venta,
       actualizar el menú de forma dinámica y realizar pedidos en tiempo real.`,
    tags: ["ReactJs"],
    demo: "https://pasteleria-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/pasteleria-web",
    image: 
     `${pastel}`,
   
  }, 
  {
    id: 2,
    title: `Tennis App`,
    about:
      `Este proyecto implementa solicitudes de API con React,
      usando Java, Spring Boot como backend y base de datos PostgreSql.
      El jugador podrá elegir una cancha, tener un partido, y un
      torneo entre 4 jugadores el cual obtiene puntos y ranking.`,
    tags: ["ReactJs", "Axios", "Spring Boot", "PostgreSql"],
    demo: "https://deploy-tennis.herokuapp.com/",
    github: "https://github.com/xyeison2010/Tennis",
    image:  `${tennis}`,
   
  },
 //las imagenes lo subire a imgur
  {
    id: 3,
    title: "Shopping Cart",
    about:
     `Construida con Thymeleaf, Css, Js para frontend,
     Spring Boot como backend y MySql. El sistema cuenta con dos roles
     usuarios y admin este contiene todos los privilegios de una tienda real.
      `,
    tags: [
      "Thymeleaf",
      "Javascript",
      "Spring Boot",
      "Mysql",
      "Jwt",
 
    ],
   // demo: "www.example.com",
    github: "https://github.com/xyeison2010/shopping_cv",
    image:
      `${shopping}`,
  },
 
  {
    id: 4,
    title: "Restaurant",
    about:
    ` Aplicación de lista de compras usando hooks. 
      Todos los datos se mantendrán en el almacenamiento local del usuario.`,
    tags: ["ReactJs"],
    demo: "https://restaurant3-web.herokuapp.com/",
    github: "https://github.com/xyeison2010/restaurante",
    image: 
     `${restaurante}`,
   
  },
];
