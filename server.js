const { get } = require('http');

const
  expressObj = require('express'),
  morganObj = require('morgan'),
  cors = require('cors'),
  app = expressObj(),
  groceryList = [],
  settingMap = {
    host: '127.0.0.1',
    port: 3000
  }
;

let idCounter = 0;

function hasItem(item_id) {
  let
    item_count = groceryList.length,
    item_map, 
    i
  ;
  for (i = 0; i < item_count; i++) {
    item_map = groceryList[i];
    if (item_map.id === item_id) {
      return true;
    }
  }
  return false;
}

function getItem(item_id) {
  let 
    item_count = groceryList.length,
    item_map,
    i
  ;
  for (i = 0; i < item_count; i++) {
    item_map = groceryList[i];
    if (item_map.id === item_id) {
      return item_map;
    }
  }
  return null;
}

function getIdx(item_id) {
  let 
    item_count = groceryList.length,
    item_map,
    i
  ;
  for (i = 0; i < item_count; i++) {
    item_map = groceryList[i];
    if (item_map.id === item_id) {
      return i;
    }
  }
  return null;
}

app.use(morganObj('dev'));
app.use(expressObj.json());
app.use(expressObj.static(__dirname + '/static'));

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
  allowedHeaders: ['Content-Type'],
}));

app.all('/item/*?', function(request, response, next){
  response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.set('Access-Control-Allow-Headers', 'content-type');
  response.set('Access-Control-Allow-Credentials', true);
  response.set('Content-Type', 'application/json');
  next();
});

app.get('/item/list', function(request, response){
  response.send(groceryList);
});

app.post('/item/create', function(request, response){
  let item_map = request.body;
  idCounter = idCounter + 1;
  item_map.id = 'c' + idCounter;
  groceryList.push(item_map);
  response.send(item_map);
});

app.get('/item/read/:id', function(request, response){
  let item_id = request.params.id;
  if (hasItem(item_id)) {
    response.send(getItem(item_id));
  } else {
    response.status(404).send({ message: 'Item not found' });
  }
});

app.post('/item/update/:id', function(request, response) {
  let
    item_id = request.params.id,
    update_map = request.body,
    item_idx = getIdx(item_id)
  ;
  if (hasItem(item_id)) {
    update_map.id = item_id;
    groceryList[item_idx] = update_map; 
    response.send(groceryList[item_idx]);
  } else {
    response.status(404).send({ message: 'Item not found' });
  }
});

app.get('/item/delete/:id', function(request, response){
  let item_id = request.params.id;
  if (hasItem(item_id)) {
    groceryList.splice(getIdx(item_id), 1);
    response.status(200).end();
  } else {
    response.status(404).send({ message: 'Item not found' });
  }
});

app.listen(settingMap.port, function(){
  console.log(
    'Waiting for requests on ' 
    + settingMap.host + ':' 
    + settingMap.port
  );
});
