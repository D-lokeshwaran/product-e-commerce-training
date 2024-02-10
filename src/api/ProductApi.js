export const retrieveProductsApi =
    () => fetch('https://fakestoreapi.com/products/categories')
            .then(resp => resp.json());

export const retrieveProductsByCategoryApi =
    (category) => fetch(`https://fakestoreapi.com/products/category/${category}`)
                    .then(resp => resp.json());

/*
    usage eg: retrieveProductsByCategoryApi(`https://fakestoreapi.com/products/category/${category}`)
                  .then(data => setProducts(data));

              data eg: {
                  image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
                  title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
                  price: 599
              }
*/