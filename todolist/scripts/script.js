function resetInput(){
  document.getElementById("task").value = "";
}

function isEmpty(s) {
  if(!s.trim().length){
      return true;  
  } 
}
function createDeleteButton(){
  var img= new Image();
  img.src = "cross.jpg"
  img.width = 20;
  img.style = "float:right";
  img.addEventListener('click', function(){
      var deletedListElement = this.parentElement;
      deletedListElement.remove();
  })
  return img;
}
var crossElements = document.querySelectorAll("img");
crossElements.forEach(element => element.addEventListener('click', function(){
var parentListItem = element.parentElement;
parentListItem.remove();
})
)
var listItems = document.querySelectorAll("li");
listItems.forEach(item => item.addEventListener('click', function(){
  if(item.classList.contains('checked')){
      item.classList.remove('checked');
  }
  else{
      item.classList.add('checked');
  }
}))
function eventListElement(listElement){   
  listElement.addEventListener('click', function(){
      if(listElement.classList.contains('checked')){
          listElement.classList.remove('checked');
      }
      else{
          listElement.classList.add('checked');
      }
  })
  return listElement;
} 


function newElement(){
var inputValue = document.getElementById("task").value;
  if(inputValue == ''){
      $(".error").toast('show');
  }
  else if(isEmpty(inputValue)==true){
      $(".error").toast('show');
  }
  else{
      var listElement = document.createElement("li"); 
      eventListElement(listElement); 
      listElement.innerHTML = inputValue; 
      document.getElementById("list").appendChild(listElement);
      listElement.appendChild(createDeleteButton()); 
      resetInput();
      $(".success").toast('show'); 
      localStorage.setItem('inputValue', inputValue);
      
      
  }
}