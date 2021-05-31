import { CardSetParams } from "Interfaces/Interface";
import client from "utils/client";

const ApiService = {
  getAllSets() {
    return client().get("/sets");
  },

  getCardsBySetCode(param: CardSetParams) {
    return client().get(
      `/cards?set=${param.setCode}&page=${param.page}&pageSize=12`
    );
  },
};

export default ApiService;
