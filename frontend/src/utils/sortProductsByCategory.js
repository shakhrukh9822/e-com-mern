export const sortProductsByCategory = (products, categories) => {
  let sortedProducts = [];

  for (let i = 0; i < categories.length; i++) {
    let filtererd = products.filter(
      (product) => product.category === categories[i]?.name
    );
    if (filtererd.length > 0) {
      sortedProducts.push({
        filtererd,
        category: categories[i],
      });
    }
  }

  return sortedProducts;
};
