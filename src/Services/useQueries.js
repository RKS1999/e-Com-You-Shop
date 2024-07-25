import { useQuery } from "@tanstack/react-query";
import {
  getAllCategory,
  getProductById,
  getProducts,
} from "../Components/API/apiHandler";

export const productGetQuaries = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const productGetByIdQuaries = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

export const getAllCategoriesQueries = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getAllCategory,
  });
};

export const productGetByCategoriesQuaries = (term) => {
  return useQuery({
    queryKey: ["product", term],
    queryFn: () => getProductByCategories(term),
    enabled: !!term,
  });
};
