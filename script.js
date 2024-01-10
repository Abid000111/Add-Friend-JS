let add = document.querySelector("#add");
// let remove = document.querySelector("#remove");
let h5 = document.querySelector("h5");
// console.log(remove);

let check = true;
add.addEventListener("click", () => {
    if(check === true){
        check = false;
        h5.innerText = "Friend";
        h5.style.color = "Green";
        add.innerHTML = "Remove Friend";
    }else{
        check = true;
        add.innerHTML = "Add Friend";
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
    }
});
// remove.addEventListener("click", () => {
//     h5.innerText = "Stranger";
//     h5.style.color = "Red";
// });