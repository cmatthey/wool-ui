class Service {
  constructor() {
    this.axios = require("axios");
    this.axios.defaults.baseURL = process.env.BACKEND_URL; //dotenv and this doesn't work
    this.axios.defaults.baseURL = "http://localhost:8000/api";
  }

  get_all_volunteers = async () => {
    try {
      const response = await this.axios.get("/volunteers");
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.request);
      return { error: error };
    }
  };

  delete_all_volunteers = async () => {
    try {
      const response = await this.axios.delete("/volunteers");
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.request);
      return { error: error };
    }
  };

  add_volunteer = async (name, group) => {
    try {
      const response = await this.axios.post("/volunteers", {
        name: name,
        group: group,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.request);
      return { error: error };
    }
  };
}

export default Service;
