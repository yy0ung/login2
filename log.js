var blank = document.querySelector('.blank_message');
var message = document.querySelector('.short_message');
var incorrect = document.querySelector('.incorrect_message');
var button = document.querySelector('#submit');

var mail = "@";


button.addEventListener('click', function(){
  if(document.querySelector('#box_id').value.length===0||
     document.querySelector('#box_pw').value.length===0){
  alert('Field is blank.')}
;});

button.addEventListener('click', function(e){
  e.preventDefault();
  if(!document.querySelector('#box_id').value.trim().includes(mail)){
    message.innerHTML = 'Not a valid format.';
    if(document.querySelector('#box_id').value===""){
      message.innerHTML = null;}
    }
});

button.addEventListener('click', function(e){
  e.preventDefault();

  if(document.querySelector('#box_pw').value.trim().length<8){
    incorrect.innerHTML = 'Password is incorrect.';
    if(document.querySelector('#box_pw').value===""){
      incorrect.innerHTML = null;}
  }else{
    window.open("https://www.naver.com/");
  }
});

document.querySelector('#box_pw').addEventListener('keydown',function(){
  if(event.keyCode==13){
      button.click();
    }
  });
