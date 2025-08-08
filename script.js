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

var currenttask = []

if(localStorage.getItem('currenttask')){
  currenttask = JSON.parsew(localStorage.getItem('currenttask'))
}
else{
  console.log('task list is empty');
  
}


function rendertask(){
  
var alltask = document.querySelector('.alltask')
var sum = ''

currenttask.forEach(function(e){
  sum += `<div class="task">
                        <h5>${e.task} <span class='${e.imp}'>imp</span></h5>
                        <button>Mark as Completed</button>
                    </div>`
})

alltask.innerHTML = sum
}

rendertask()


form.addEventListener('submit',function(e){
  e.preventDefault()
  currenttask.push({task:taskinput.value, details:taskdetails.value, imp:taskcheck.checked});
  localStorage.setItem('currenttask', JSON.stringify(currenttask))
  taskinput.value = '';
  taskdetails.value = '';
  taskcheck.checked = false;
  rendertask()

  
})
  