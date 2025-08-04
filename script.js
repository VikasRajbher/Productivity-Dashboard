function opencards(){
  var allelem = document.querySelectorAll('.elem');
var allfullelem = document.querySelectorAll(".fullelem")
var allfullelemBackBtn = document.querySelectorAll(".fullelem .back")

allelem.forEach(function(elem) {
  elem.addEventListener('click',function(){
    allfullelem[elem.id].style.display = 'block'
          
   });  
});

allfullelemBackBtn.forEach(function(back){
  back.addEventListener('click', function(){
    allfullelem[back.id].style.display = 'none'
    
  });
});
}

opencards()

var form = document.querySelector('.addtask form')
var taskinput = document.querySelector('.addtask form #task-inp')
var taskdetails = document.querySelector('.addtask form textarea')
var taskcheck = document.querySelector('.addtask form #check')

form.addEventListener('submit',function(e){
  e.preventDefault()
  console.log(taskinput.value, taskdetails.value, taskcheck.checked);
  
})
  