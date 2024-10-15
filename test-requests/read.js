const axiosObj = require('axios');

axiosObj({
  method: 'get',
  url: `http://127.0.0.1:3000/item/read/c3`
})
  .then(function(response) {
    console.log('Item Details:', response.data);
  })
  .catch(function(error) {
    console.error('Error reading item:', error);
  });
