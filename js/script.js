const Menu = document.querySelectorAll(".nav-menu-list");
const Home = document.querySelectorAll(".Home");
const ModeGame = document.querySelectorAll(".ModeGame");
const Stage = document.querySelectorAll(".Stage");

const changeMenu = () => {
    for(let i = 0; i < Menu.length; i++) {
        Menu[i].addEventListener("click", () => {
            switch(Menu[i]) {
                case Menu[0]:
                    Menu[0].classList.add("list-activ");
                    Menu[1].classList.remove("list-activ");
                   Menu[2].classList.remove("list-activ");
                   Home[0].classList.remove("off");
                   ModeGame[0].classList.add("off");
                   Stage[0].classList.add("off");
                   break;
                case Menu[1]:
                    Menu[1].classList.add("list-activ");
                    Menu[0].classList.remove("list-activ");
                    Menu[2].classList.remove("list-activ");
                    Home[0].classList.add("off");
                    ModeGame[0].classList.remove("off");
                    Stage[0].classList.add("off");
                   break;
                case Menu[2]:
                    Menu[2].classList.add("list-activ");
                    Menu[0].classList.remove("list-activ");
                    Menu[1].classList.remove("list-activ");
                    Home[0].classList.add("off");
                    ModeGame[0].classList.add("off");
                    Stage[0].classList.remove("off");
                   break;
                default:
                    break;
            }
        });
    }
};

const body = document.querySelectorAll("body");
const body = document.querySelectorAll("body");

const animate = () => {
    console.log(window.innerHeight, window.scrollY, body[0].clientHeight);

};

changeMenu();
animate();