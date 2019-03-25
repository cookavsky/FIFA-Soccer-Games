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

const HomeUT = document.querySelectorAll(".Home-UT");
const HomeWK = document.querySelectorAll(".Home-WK");
const HomeMech = document.querySelectorAll(".Home-Mech");
const HomeAbout = document.querySelectorAll(".Home-About");
const body = document.querySelectorAll("body");

console.log(HomeUT[0].offsetTop, HomeWK[0].offsetTop, HomeMech[0].offsetTop, HomeAbout[0].offsetTop);

const bodymouse = () => {
    for(let i = 0; i < body.length; i++) {
        body[i].addEventListener("click", () => {
            console.log(event.pageY);
        })
    }
};

changeMenu();
bodymouse();