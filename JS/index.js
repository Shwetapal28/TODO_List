
var taskname=document.querySelector("#taskName");
var tasklist=document.querySelector("#taskList");
count=0;
document.querySelector("#addTask").addEventListener('click',function()
{
    if(taskName.value=="")
    alert("task name is required");
    else{
        count++;
        tasklist.innerHTML+="<div class='task' id='task"+count+"'><input type='checkbox' id='check"+count+"' onchange='changeStatus("+count+")'>&#9;&#9;&#9; <span id='text"+count+"'>"+taskname.value+"</span><input class='button' type='button' onclick='removeDiv("+count+")'value='x'></div>";
        taskname.value="";
    }
});

function changeStatus(id){
    console.log(document.getElementById('check'+id).checked);
    var status=document.getElementById('check'+id).checked;
    if(status){
        document.getElementById("text"+id).style.textDecoration="line-through";
        document.getElementById("text"+id).style.color="red";
    }
    else{
        document.getElementById("text"+id).style.textDecoration="none";
        document.getElementById("text"+id).style.color="rgb(90, 14, 90)";
    }
}

function removeDiv(id){
    document.getElementById("task"+id).remove();
}