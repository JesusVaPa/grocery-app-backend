const axiosObj = require('axios');

const itemId = 'c1'; // Cambia el ID según lo necesites

axiosObj({
  method: 'get',
  url: `http://127.0.0.1:3000/item/read/${itemId}`
})
  .then(function(response) {
    console.log('Item Details:', response.data);
  })
  .catch(function(error) {
    console.error('Error reading item:', error);
  });
