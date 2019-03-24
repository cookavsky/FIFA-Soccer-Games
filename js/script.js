const Menu = document.querySelectorAll(".nav-menu-list");

const changeMenu = () => {
    for(let i = 0; i < Menu.length; i++) {
        Menu[i].addEventListener("click", () => {
            switch(Menu[i]) {
                case Menu[0]:
                    Menu[0].classList.add("list-activ");
                    Menu[1].classList.remove("list-activ");
                   Menu[2].classList.remove("list-activ");
                   break;
                case Menu[1]:
                    Menu[1].classList.add("list-activ");
                    Menu[0].classList.remove("list-activ");
                   Menu[2].classList.remove("list-activ");
                   break;
                case Menu[2]:
                    Menu[2].classList.add("list-activ");
                    Menu[0].classList.remove("list-activ");
                   Menu[1].classList.remove("list-activ");
                   break;
                default:
                    break;
            }
        });
    }
};

changeMenu();