const axios = require("axios");
// (async () => {
//   try {
//     const res = await axios.get(`http://localhost:5000/api/products/1232`);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// })();
(async () => {
  try {
    let response = await axios.get(
      "http://localhost:5000/api/products/6724e2075d6d5bd2c55dscf6",
      {
        method: "GET",
      }
    );
  } catch (error) {
    console.log(error.response.data);
  }
})();
