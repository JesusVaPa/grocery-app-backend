const axiosObj = require('axios');

axiosObj({
	method:'get',
	url:'http://127.0.0.1:3000/item/delete/c1'
})
	.then(function(response){
		console.log(response.data);
	})
	.catch(function(error) {
		console.error('Item not found');
	})
