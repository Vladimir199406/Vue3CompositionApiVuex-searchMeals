import axios from "axios";

export const searchMeals = ({ commit }, keyword) => {
  const fullEndPoint = `/api/search.php?s=${keyword}`;
  axios
    .get(fullEndPoint)
    .then(({ data }) => {
      commit("setSearchMeals", data.meals);
    });
};
