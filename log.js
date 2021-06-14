var blank = document.querySelector('.blank_message');
var short = document.querySelector('.short_message');
var incorrect = document.querySelector('.incorrect_message');
var button = document.querySelector('#submit');

button.addEventListener('click', function(){
  if(document.querySelector('#box_id').value.length===0||
     document.querySelector('#box_pw').value.length===0){
  alert('Field is blank.')}
;});
