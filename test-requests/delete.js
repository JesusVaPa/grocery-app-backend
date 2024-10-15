const axiosObj=require('axios');

axiosObj({
	method:'get',
	url:'http://127.0.0.1:3000/delete.c3'
})
	.then(function(response){
		console.log(response.data);
	})
	.catch(function(error) {
		console.error(error);
	})
;