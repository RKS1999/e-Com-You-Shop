// apiHandler.js
import { productAxiosInstance, userAxiosInstance } from "./axiosInstance";
import { endPoint } from "./EndPoints";

export const getProducts = async () => {
  try {
    const response = await productAxiosInstance.get(endPoint.getAllProducts);
    return response.data.products || [];
  } catch (error) {
    console.log("Error fetching products:", error.response || error.message);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await productAxiosInstance.get(endPoint.getProductById(id));
    return response.data;
  } catch (error) {
    console.log("Error fetching product by ID:", error.response || error.message);
    return null;
  }
};

export const getAllCategory = async () => {
  try {
    const response = await productAxiosInstance.get(endPoint.getAllCategory);
    return response.data;
  } catch (error) {
    console.log("Error fetching categories:", error.response || error.message);
    return null;
  }
};

export const getProductByCategories = async (term) => {
  try {
    const response = await productAxiosInstance.get(endPoint.getProductByCategories(term));
    return response.data;
  } catch (error) {
    console.log("Error fetching products by category:", error.response || error.message);
    return null;
  }
};

// Uncomment and use the userAxiosInstance for user-related requests as needed
// export const userLogin = async (username, password) => {
//   try {
//     const response = await userAxiosInstance.post(endPoint.login, { username, password });
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in:", error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const userRegister = async (username, email, password) => {
//   try {
//     const response = await userAxiosInstance.post(endPoint.signup, { username, email, password });
//     return response.data;
//   } catch (error) {
//     console.error("Error registering user:", error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

// export const getUserById = async (id) => {
//   try {
//     const response = await userAxiosInstance.get(`${endPoint.profile}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log("Error fetching user details:", error.response || error.message);
//     return null;
//   }
// };

// export const updateUser = async (id, userData) => {
//   try {
//     const response = await userAxiosInstance.put(`${endPoint.editProfile}/${id}`, userData);
//     return response.data;
//   } catch (error) {
//     console.log("Error updating user:", error.response || error.message);
//     throw error;
//   }
// };
