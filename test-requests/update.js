const axiosObj = require('axios');

const itemId = 'c1'; 

axiosObj({
  method: 'post',
  url: `http://127.0.0.1:3000/item.update/${itemId}`,
  data: {
    name: 'Updated Item Name'
  }
})
  .then(function(response) {
    console.log('Item Updated:', response.data);
  })
  .catch(function(error) {
    console.error('Error updating item:', error);
  });
