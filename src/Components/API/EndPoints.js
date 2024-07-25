const baseUrl = "https://dummyjson.com";
const loginURL = "https://login-yh9z.onrender.com";
const endPoint = {
  getAllProducts: `/products`,
  getProductById: (id) => `/products/${id}`,
  getAllCategory: `/products/categories`,
  getProductByCategories: (term) => `/products/category/${term}`,
  login: "/login",
  signup: "/signup",
  profile: "/profile",
  editProfile: "/editprofile",
};

export { baseUrl, loginURL, endPoint };
