const axiosObj = require('axios');

axiosObj({
  method: 'post',
  url: 'http://127.0.0.1:3000/item/create',
  data: {
    name: 'Tomatoes'
  }
})
  .then(function(response) {
    console.log('Item Created:', response.data);
  })
  .catch(function(error) {
    console.error('Error creating item:', error);
  });
