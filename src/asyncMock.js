
const products = [
    {
        id: '1',
        name: 'Sandalias',
        category: 'calzado',
        price: 25,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358',
        description: 'Simples, minimalistas y cómodas, estas sandalias cuentan con un diseño clásico en el tono perfecto de hierro. Ideales para relajarse en casa o hacer mandados.',
    },
    {
        id: '2',
        name: 'Pantalones de Chándal',
        category: 'ropa',
        price: 35,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387',
        description: 'Pantalones de chándal suaves y cómodos en tonos elegantes. Perfectos para relajarse gracias a su tejido elástico acogedor que ofrece calidez.',
    },
    {
        id: '3',
        name: 'Camiseta para Hombre',
        category: 'ropa',
        price: 40,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410',
        description: 'Camiseta clásica de algodón orgánico con un ajuste relajado, cuello redondo y diseño atemporal. Disfruta de la comodidad transpirable del algodón 100% orgánico.',
    },
    {
        id: '4',
        name: 'Sudadera con Capucha',
        category: 'ropa',
        price: 90,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHoodie01.jpg?v=1675455175',
        description: 'Esta sudadera con capucha es ideal para comodidad y calidez. Con un interior de felpa suave, es ligera y perfecta para días fríos.',
    },
    {
        id: '5',
        name: 'Sudadera para Hombre',
        category: 'ropa',
        price: 120,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenMenscrew01.jpg?v=1675454919',
        description: 'Sudadera de alta calidad ideal para el look diario. Fabricada en 100% algodón, es suave y cómoda.',
    },
    {
        id: '6',
        name: 'Sudadera para Mujer',
        category: 'ropa',
        price: 120,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomenscrew01.jpg?v=1675453375',
        description: 'Sudadera de alta calidad para uso diario. Hecha de algodón 100%, suave y cómoda.',
    },
    {
        id: '7',
        name: 'Camiseta para Mujer',
        category: 'ropa',
        price: 40,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWomensTshirt01.jpg?v=1675463247',
        description: 'Camiseta clásica de algodón orgánico con un ajuste relajado y cuello redondo.',
    },
    {
        id: '8',
        name: 'Zapatillas de Lona',
        category: 'calzado',
        price: 40,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenCanvasSneaker01.jpg?v=1675454881',
        description: 'Zapatillas de lona de alta calidad, cómodas y transpirables, perfectas para un look casual.',
    },
    {
        id: '9',
        name: 'Mochila de Pecho',
        category: 'accesorios',
        price: 200,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenFrontpack.jpg?v=1675455064',
        description: 'Mochila de pecho moderna, ligera y resistente al agua, perfecta para transportar múltiples artículos.',
    },
    {
        id: '10',
        name: 'Sudadera con Media Cremallera',
        category: 'ropa',
        price: 100,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHalfzip01.jpg?v=1675455104',
        description: 'Sudadera atlética con media cremallera, ligera y cómoda para actividades deportivas.',
    },
    {
        id: '11',
        name: 'Leggings',
        category: 'ropa',
        price: 20,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenLeggings03.jpg?v=1675455256',
        description: 'Leggings ligeros y deportivos con tejido que elimina la humedad, ideales para el ejercicio.',
    },
    {
        id: '12',
        name: 'Chaleco Acolchado Ligero',
        category: 'ropa',
        price: 80,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/green.jpg?v=1675459832',
        description: 'Chaleco ligero de nylon resistente, ideal para protegerse del viento y la lluvia.',
    },
    {
        id: '13',
        name: 'Shorts Deportivos',
        category: 'ropa',
        price: 45,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenShorts.jpg?v=1675462426',
        description: 'Shorts de nylon de alto rendimiento para máxima comodidad y durabilidad.',
    },
    {
        id: '14',
        name: 'Camiseta de Entrenamiento',
        category: 'ropa',
        price: 10,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenWorkoutShirt.jpg?v=1675455464',
        description: 'Camiseta de entrenamiento de alto rendimiento, ligera y con acabado antibacterial.',
    },
    {
        id: '15',
        name: 'Gafas de Sol Negras',
        category: 'accesorios',
        price: 50,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Blacksunnies.jpg?v=1675447388',
        description: 'Gafas de sol negras con protección UV400 y lentes espejados para un estilo moderno.',
    },
    {
        id: '16',
        name: 'Zapatillas de Cuero Blancas',
        category: 'calzado',
        price: 90,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Differentwhiteleathersneakers01.jpg?v=1675447428',
        description: 'Zapatillas de cuero blancas con diseño clásico y gran durabilidad.',
    },
    {
        id: '17',
        name: 'Tenis para Correr Grises',
        category: 'calzado',
        price: 30,
        image: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/Greyrunners.jpg?v=1675447483',
        description: 'Tenis para correr grises, ligeros y transpirables, ideales para largas distancias.',
    }
];

export default products;

  
  export const getProductsByCategory = (categoryId) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId ? products.filter((prod) => prod.category === categoryId) : products
        );
      }, 1000);
    });
  
  export const getProductById = (id) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === id));
      }, 1000);
    });
  