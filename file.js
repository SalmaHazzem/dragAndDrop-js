let input =document.getElementById("input-field");
let btn =document.querySelector(".btn");
let boxes=document.querySelectorAll(".box");
let drag;

btn.onclick= function() {
    if(input.value !==""){
        boxes[0].innerHTML+= `<p class="item"  draggable="true">${input.value}</p>`;
        input.value="";
        drag=input.value;
    
}
dragItems();
}
function dragItems(){
let items= document.querySelectorAll(".item");
items.forEach(i=>{

    i.addEventListener("dragstart",function(){
    
        drag=i;
    })

    i.addEventListener("dragend",function(){
        drag=null;
    })

    boxes.forEach(box=>{

        box.addEventListener("dragover",function(e){
            e.preventDefault();
            box.style.backgroundColor="green"
        })

        box.addEventListener("dragleave",function(){
            box.style.backgroundColor="#fff";
        })
        box.addEventListener("drop",function(){
            box.append(drag);
        })
    })
   

})

}