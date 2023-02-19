
const ingEl=document.getElementById("ingredients");
const prepEl=document.getElementById("preparation")

//1

// ingEl.addEventListener('mouseover',()=>{
//  ingEl.firstElementChild.firstElementChild.style.fontSize = "300%";
// })


function ingredientsHover() {
  ingEl.firstElementChild.firstElementChild.style.fontSize = "300%";
    
}

function ingredientsNormal() {
  ingEl.firstElementChild.firstElementChild.style.fontSize = "100%";
}

function preparationsHover() {
  prepEl.firstElementChild.firstElementChild.style.fontSize = "300%";
}

function preparationsNormal() {
 prepEl.firstElementChild.firstElementChild.style.fontSize = "100%";
}
