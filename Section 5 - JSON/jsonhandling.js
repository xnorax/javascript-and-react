var response = null;
var followers = null;

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  getUser(document.getElementsByTagName('input')[0].value);
});

function getUser(name){
  fetch(`https://api.github.com/users/${name}`)
    .then(function(res) {
      return res.json();
    })
    .then(function(jsonResponse) {
      response = jsonResponse;
      assignValues();
      getFollowers(response.followers_url);
    })
}

function assignValues(){
  document.getElementById('loader').style = 'display: none';
  document.getElementById('avatar').src = response.avatar_url;
  document.getElementById('name').innerText = response.name;
  document.getElementById('username').innerText = response.login;
  document.getElementById('location').innerText = response.location;
  document.getElementById('bio').innerText = response.bio;
  document.getElementById('count').innerText = 'Followers: ' + response.followers;
}

function getFollowers(url){
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(jsonResponse) {
      followers = jsonResponse;
      listFollowers();
    })
}

function listFollowers() {
  followers.forEach(function(f) {
    // 1- create li element
    var li = document.createElement('li');
    // 2- assign a value to the element
    li.innerHTML = `<a href=${f.html_url}>`
    + `<img src=${f.avatar_url} alt=${f.login}/>`
    + '</a>';
    // 3- append the element to the list
    document.getElementById('list').appendChild(li);
  });
}
