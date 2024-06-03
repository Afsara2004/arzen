var search=document.getElementById("search");
var product=document.getElementById("product");
var box=product.querySelectorAll(".box");

search.addEventListener("keyup",function(){
    var enter=event.target.value.toUppercase();

    for(var count=0;count<=box.length;count++){
        var name=box[count].querySelector("p").textContent;

        if(name.toUppercase().indexOf(enter)<0){
            box[count].style.display="none";
        }
        else{
            box[count].style.display="block";
        }
    }
});