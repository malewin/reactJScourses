// //Функция высшего порядка для фильтрации списка продуктов
// const withFilter = (products, filter) => {
//   switch (filter) {
//     case "XS":
//       return products.filter((product) => product.size === "XS");
//     case "S":
//       return products.filter((product) => product.size === "S");
//     case "M":
//       return products.filter((product) => product.size === "M");
//     case "L":
//       return products.filter((product) => product.size === "L");
//     default:
//       return products;
//   }
// };

// export default withFilter;

const withFilter = (products, filter) => {
  if (filter.length === 0) return products; // Если нет фильтров, возвращаем все продукты

  return products.filter((product) => filter.includes(product.size)); // Фильтруем по размеру
};

export default withFilter;
