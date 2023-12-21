import { brewerApi } from "./brewerApi";

export const postImage = async () => {
  const { response } = await brewerApi.post("/recetas/img");
  console.log(response);
  return response;
};

export const createReceta = async (RecetaData) => {
  const { data } = await brewerApi.post("/recetas", RecetaData);
  return data;
};

export const getAllRecetas = async () => {
  const { data } = await brewerApi.get("/recetas");
  return data;
};

export const getRecetaById = async (id) => {
  const { data } = await brewerApi.get(`/recetas/${id}`);
  return data;
};

export const postImage = async (formData) => {
  try {
    const { response } = await brewerApi.post("/recetas/img", formData);
    return response;
  } catch (e) {
    console.log(e);
  }

export const getRecetasFromUser = async (userId) => {
  const { data } = await brewerApi.get("/recetas");

  // Filtrar las recetas basado en el userId
  const userRecipes = data.filter((recipe) => recipe.UserId === userId);
  return userRecipes;

};
