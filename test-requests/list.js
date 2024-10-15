const axiosObj = require('axios');

axiosObj({
  method: 'get',
  url: 'http://127.0.0.1:3000/item/list'
})
  .then(function(response) {
    console.log('Grocery List:', response.data);
  })
  .catch(function(error) {
    console.error('Error fetching list:', error);
  });
