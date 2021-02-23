const axios = require('axios').default;

export const createUser = (name, age) => {
  axios.post('https://vi7l2nyeu9.execute-api.us-east-1.amazonaws.com/dev/customer', {
    name: name,
    age: age
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
