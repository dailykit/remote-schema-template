const axios = require("axios");
const resolver = {
  Query: {
    getAllUsers: async (_, args) => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.data;
      const updatedData = data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          address: user.address,
          username: user.username,
        };
      });
      return updatedData;
    },
  },
  Mutation: {
    socialMediaPost: async (_, args) => {
      const response = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        url: "https://app.ayrshare.com/api/post",
        data: args,
      });
      const data = await response.data;
      return data;
    },
  },
};

module.exports = resolver;
