const HomeUT = document.querySelectorAll(".Home-UT-Intro");
const HomeUTLeft = document.querySelectorAll(".Home-UT-Left");
const HomeUTRight = document.querySelectorAll(".Home-UT-Right");

const changeBG = () => {
/// Change BG Home UT ///
    for(let h1L = 0; h1L < HomeUTLeft.length; h1L++) {
        HomeUTLeft[h1L].addEventListener("click", () => {
            if (HomeUT[h1L].className === "Home-UT-Intro Home-UT-3") {
                HomeUT[0].classList.remove("Home-UT-3");
                HomeUT[0].classList.add("Home-UT-2");
            } else if (HomeUT[0].className === "Home-UT-Intro Home-UT-2") {
                HomeUT[0].classList.remove("Home-UT-2");
                HomeUT[0].classList.add("Home-UT-1");
            }
        });
    } for(let h1R = 0; h1R < HomeUTRight.length; h1R++) {
        HomeUTRight[h1R].addEventListener("click", () => {
            if (HomeUT[0].className === "Home-UT-Intro Home-UT-1") {
                HomeUT[0].classList.remove("Home-UT-1");
                HomeUT[0].classList.add("Home-UT-2");
            } else if (HomeUT[0].className === "Home-UT-Intro Home-UT-2") {
                HomeUT[0].classList.remove("Home-UT-2");
                HomeUT[0].classList.add("Home-UT-3");
            }
        });
    }
};

changeBG();