import client from "utils/client";

const ApiService = {
	getAllSets() {
		return client().get('/sets');
	},
};

export default ApiService;
