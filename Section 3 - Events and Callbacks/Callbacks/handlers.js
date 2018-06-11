document.getElementById('btn1').addEventListener('click',function(){
  console.log('I have been clicked');
});

var count =0;
document.getElementById('btn2').addEventListener('mouseover',function(event){
  document.getElementById('btn2').innerText='You hovered the button '+ ++count +' time(s)';
});

// Custom Event handler
document.body.addEventListener('timeEvent', stateTime);

function stateTime(e) {
  alert("event time is: " + e.detail);
}

var myEvent = new CustomEvent('timeEvent', {
  'detail': new Date()
});
