export const searchQuery = (search, currentPage) => {
  // getting a new instance from  "URLSearchParams"
  const sp = new URLSearchParams(search);

  //   sorting products
  const q = sp.get("q") || "";
  const price = sp.get("price") || "0, 2000";
  const category = sp.get("category") || "";
  const ratings = sp.get("ratings") || 1;

  // Get Price
  const getGTE = price.split(",")[0];
  const getLTE = price.split(",")[1];

  if (!!category) {
    return `/api/v1/search?q=${q}&page=${currentPage}&price[gte]=${getGTE}&price[lte]=${getLTE}&category=${category}`;
  } else {
    return `/api/v1/search?q=${q}&page=${currentPage}&price[gte]=${getGTE}&price[lte]=${getLTE}&ratings=${ratings}`;
  }
};
