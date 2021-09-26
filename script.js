let inputText=document.getElementById('inputText');
let taskList=document.getElementById('taskList');
let addTask=document.getElementById('addTask');
 var donebtn=document.querySelectorAll('.donebtn');

 function check(){
    for(let i=0; i<donebtn.length;++i){
        donebtn[i].onclick=function(){
            (donebtn[i].parentElement).remove();
        }
    }
}
for(let i=0; i<donebtn.length;++i){
    donebtn[i].onclick=function(){
        (donebtn[i].parentElement).remove();
    }
}

addTask.onclick=function(){
    taskList.innerHTML+='<span>' + inputText.value +`<button class='donebtn'>Done</button><\span>`;
    inputText.value="";
    donebtn=document.querySelectorAll('.donebtn');
    check();
}



