const axiosObj = require('axios');

axiosObj({
  method: 'post',
  url: 'http://127.0.0.1:3000/item/update/c3', 
  data: {
    name: 'Cheese'
  }
})
  .then(function(response) {
    console.log('Item Updated:', response.data);
  })
  .catch(function(error) {
    console.error('Error updating item:', error);
  });
