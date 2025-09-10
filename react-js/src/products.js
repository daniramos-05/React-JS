export const productos = [
  {
    id: 1,
    nombre: "Remera",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755737206/remera_aw0dxv.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$10.000",
    categoria: "arriba",
  },
  {
    id: 2,
    nombre: "Pantalon",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755782067/pantalon_raw_denim_c22kd4.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$42.000",
    categoria: "abajo",
  },
  {
    id: 3,
    nombre: "Zapatillas",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755737207/zapatillas_wrnjuu.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$110.000",
    categoria: "calzado",
  },
  {
    id: 4,
    nombre: "Campera",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755781184/campera_zmgbth.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$180.000",
    categoria: "arriba",
  },
  {
    id: 5,
    nombre: "Anteojos",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755737206/anteojos_euupci.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$10.000",
    categoria: "accesorios",
  },
  {
    id: 6,
    nombre: "Pantalon",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755737207/pantalon_rzw6fa.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$40.000",
    categoria: "abajo",
  },
  {
    id: 7,
    nombre: "Borcegos",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755781827/timberland_pgunws.avif",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$200.000",
    categoria: "calzado",
  },
  {
    id: 8,
    nombre: "Reloj",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755737646/reloj_s41eap.avif",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$60.000",
    categoria: "accesorios",
  },
  {
    id: 9,
    nombre: "Pantalon",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755781827/pantalon_carhartt2_jtuz0s.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$45.000",
    categoria: "abajo",
  },
  {
    id: 10,
    nombre: "Campera",
    img: "https://res.cloudinary.com/dwfbrcxgu/image/upload/v1755781826/campera_raw_denim_h8r2rd.webp",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore modi cupiditate cumque dolorem, totam impedit excepturi ad corporis ex omnis molestiae quas ut nostrum dicta, quo saepe tenetur numquam voluptatum?",
    precio: "$100.000",
    categoria: "arriba",
  },
];

export const getProductos = () =>{
  return new Promise ( ( resolve , reject ) => {
    setTimeout( () => {
        resolve(productos);
    }, 100);
  })
} 