var items = null;

function getInfo(){
  fetch(`https://images-api.nasa.gov/search?q=${document.getElementById('searchInput').value}&media_type=image`)
    .then(function(res) {
      return res.json();
    })
    .then(function(jsonResponse) {
      items = jsonResponse.collection.items;
      listResults();
    })
}

function listResults() {
  for (var i=0;i<items.length && i<=18;i++){
    var item = items[i];
    // 1- create li element
    var div = document.createElement('div');
    // 2- assign a value to the element
    div.innerHTML = `<img src=${item.links[0].href} alt=${item.data[0].title}/>`;
    // 3- append the element to the list
    document.getElementById('gallery').appendChild(div);
  }
  document.getElementById('gallery').style = "visibility: visible;";
}
