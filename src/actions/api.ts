import ApiService from "services/api";

export const getAllSets = async () => {
  try {
    const res = await ApiService.getAllSets();
    console.log(res.data.sets);
    return res.data.sets;
  } catch (error) {
    console.log("Error occurred", error);
  }
};
