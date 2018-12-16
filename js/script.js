const Mode = document.querySelectorAll("#Mode");
const Stage = document.querySelectorAll("#Stage");

const hover = function() {
    for(let i = 0; i < Mode.length; i++) {
        Mode[i].addEventListener("mouseover", function () {
            Mode[i].children[1].children[0].classList.remove("Hide");
            Mode[i].children[1].children[1].classList.remove("Hide");
            Mode[i].children[1].children[2].classList.remove("Hide");
            Mode[i].children[1].children[3].classList.remove("Hide");
        })
        Mode[i].addEventListener("mouseout", function () {
            Mode[i].children[1].children[0].classList.add("Hide");
            Mode[i].children[1].children[1].classList.add("Hide");
            Mode[i].children[1].children[2].classList.add("Hide");
            Mode[i].children[1].children[3].classList.add("Hide");
        })
    }
    for(let y = 0; y < Stage.length; y++){
        Stage[y].addEventListener("mouseover", function () {
            Stage[y].children[1].children[0].classList.remove("Hide");
            Stage[y].children[1].children[1].classList.remove("Hide");
            Stage[y].children[1].children[2].classList.remove("Hide");
        })
        Stage[y].addEventListener("mouseout", function () {
            Stage[y].children[1].children[0].classList.add("Hide");
            Stage[y].children[1].children[1].classList.add("Hide");
            Stage[y].children[1].children[2].classList.add("Hide");
        })
    }
};

hover();