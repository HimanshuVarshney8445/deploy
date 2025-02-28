let string = "";
let num = document.querySelectorAll(".number");
let para = document.querySelector(".screen p");

num.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if(e.target.innerText == "="){
            string = eval(string);
            para.innerText = string;
        }else if(e.target.innerText == "C"){
            string = "";
            para.innerText = string;
        }else{
            string += e.target.innerText;
            para.innerText = string;
        }
    });
});

