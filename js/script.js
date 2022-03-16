document.getElementById("top-player").style.color = "red";
document.getElementById("blog-color").style.color = "red";

const topPlayer = document.getElementsByClassName("top-player");
for(let player of topPlayer){
    player.style.backgroundColor = "rgb(238, 130, 238)";
};



document.getElementById("list-btn").addEventListener("click", function(){
    const listItem = document.getElementById("list-items");
   const li = document.createElement("li");
   li.innerText = "list"
   listItem.appendChild(li);
});


document.getElementById("plus-btn").addEventListener("click", function(){
    const input = document.getElementById("input-field");
   
    if(input.value < 5){
        input.value = parseInt(input.value) + 1;
    }
});




