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
                    removeAnimate();
                   break;
                case Menu[1]:
                    Menu[1].classList.add("list-activ");
                    Menu[0].classList.remove("list-activ");
                    Menu[2].classList.remove("list-activ");
                    Home[0].classList.add("off");
                    ModeGame[0].classList.remove("off");
                    Stage[0].classList.add("off");
                    removeAnimate();
                   break;
                case Menu[2]:
                    Menu[2].classList.add("list-activ");
                    Menu[0].classList.remove("list-activ");
                    Menu[1].classList.remove("list-activ");
                    Home[0].classList.add("off");
                    ModeGame[0].classList.add("off");
                    Stage[0].classList.remove("off");
                    removeAnimate();
                   break;
                default:
                    break;
            }
        });
    }
};

/// Animate Div Intro and Header when scrolling in down and up. ////

const body = document.querySelectorAll("body");
/////Home////
const HomeUTHeader = document.querySelectorAll(".Home-UT-Header");
const HomeUTIntro= document.querySelectorAll(".Home-UT-Intro");
const HomeWKHeader = document.querySelectorAll(".Home-WK-Header");
const HomeWKIntro = document.querySelectorAll(".Home-WK-Intro");
const HomeMechHeader = document.querySelectorAll(".Home-Mech-Header");
const HomeMechIntro = document.querySelectorAll(".Home-Mech-Intro");
const HomeAboutIntro = document.querySelectorAll(".Home-About-Intro");
const HomeAboutHeader = document.querySelectorAll(".Home-About-Header");
/////ModeGame////
const ModeGameWKHeader = document.querySelectorAll(".ModeGame-WK-Header");
const ModeGameWKIntro = document.querySelectorAll(".ModeGame-WK-Intro");
const ModeGameJourneyHeader = document.querySelectorAll(".ModeGame-Journey-Header");
const ModeGameJourneyIntro = document.querySelectorAll(".ModeGame-Journey-Intro");
const ModeGameCareerIntro = document.querySelectorAll(".ModeGame-Career-Intro");
const ModeGameCareerHeader = document.querySelectorAll(".ModeGame-Career-Header");
////Stage/////
const StageXBOXHeader = document.querySelectorAll(".Stage-XBOX-Header");
const StageXBOXIntro = document.querySelectorAll(".Stage-XBOX-Intro");
const StagePCIntro = document.querySelectorAll(".Stage-PC-Intro");
const StagePCHeader = document.querySelectorAll(".Stage-PC-Header");

const Animate = () => {
    const windowHeightLoad = window.innerHeight + window.scrollY;

    HomeUTHeader[0].style.visibility = "hidden";
    HomeUTIntro[0].style.visibility = "hidden";
    HomeWKHeader[0].style.visibility = "hidden";
    HomeWKIntro[0].style.visibility = "hidden";
    HomeMechHeader[0].style.visibility = "hidden";
    HomeMechIntro[0].style.visibility = "hidden";
    HomeAboutIntro[0].style.visibility = "hidden";
    HomeAboutHeader[0].style.visibility = "hidden";

    if (window.scrollY > 0) {
        if (Home[0].className === "Home") {
            let HomeUTText = HomeUTIntro[0].offsetTop + 150;
            let HomeUTImg = HomeUTHeader[0].offsetTop + 150;
            let HomeWKText = HomeWKIntro[0].offsetTop + 150;
            let HomeWKImg = HomeWKHeader[0].offsetTop + 150;
            let HomeMechText = HomeMechIntro[0].offsetTop + 150;
            let HomeMechImg = HomeMechHeader[0].offsetTop + 150;
            let HomeAboutText = HomeAboutIntro[0].offsetTop + 150;
            let HomeAboutImg = HomeAboutHeader[0].offsetTop + 150;
            if (windowHeightLoad >= HomeUTText) {
                HomeUTIntro[0].classList.add("Opacity");
                HomeUTIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeUTImg) {
                HomeUTHeader[0].classList.add("FadeUp");
                HomeUTHeader[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeWKText) {
                HomeWKIntro[0].classList.add("Opacity");
                HomeWKIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeWKImg) {
                HomeWKHeader[0].classList.add("FadeUp");
                HomeWKHeader[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeMechText) {
                HomeMechIntro[0].classList.add("RightTransform");
                HomeMechIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeMechImg) {
                HomeMechHeader[0].classList.add("RightRotate360");
                HomeMechHeader[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeAboutText) {
                HomeAboutIntro[0].classList.add("LeftTransform");
                HomeAboutIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= HomeAboutImg) {
                HomeAboutHeader[0].classList.add("LeftRotate360");
                HomeAboutHeader[0].style.visibility = "visible";
            }
        } else if (ModeGame[0].className === "ModeGame") {
            let ModeGameWKText = ModeGameWKIntro[0].offsetTop + 150;
            let ModeGameWKImg = ModeGameWKHeader[0].offsetTop + 150;
            let ModeGameJourneyText = ModeGameJourneyIntro[0].offsetTop + 150;
            let ModeGameJourneyImg = ModeGameJourneyHeader[0].offsetTop + 150;
            let ModeGameCareerText = ModeGameCareerIntro[0].offsetTop + 150;
            let ModeGameCareerImg = ModeGameCareerHeader[0].offsetTop + 150;
            if (windowHeightLoad >= ModeGameWKText) {
                ModeGameWKIntro[0].classList.add("ZoomIn");
                ModeGameWKIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= ModeGameWKImg) {
                ModeGameWKHeader[0].classList.add("RightSkew");
                ModeGameWKHeader[0].style.visibility = "visible";
            } if (windowHeightLoad >= ModeGameJourneyText) {
                ModeGameJourneyIntro[0].classList.add("ZoomOut");
                ModeGameJourneyIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= ModeGameJourneyImg) {
                ModeGameJourneyHeader[0].classList.add("LeftSkew");
                ModeGameJourneyHeader[0].style.visibility = "visible";
            } if (windowHeightLoad >= ModeGameCareerText) {
                ModeGameCareerIntro[0].classList.add("Opacity");
                ModeGameCareerIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= ModeGameCareerImg) {
                ModeGameCareerHeader[0].classList.add("LeftTransform");
                ModeGameCareerHeader[0].style.visibility = "visible";
            }
        } else if (Stage[0].className === "Stage") {
            let StageXBOXText = StageXBOXIntro[0].offsetTop + 150;
            let StageXBOXImg = StageXBOXHeader[0].offsetTop + 150;
            let StagePCText = StagePCIntro[0].offsetTop + 150;
            let StagePCImg = StagePCHeader[0].offsetTop + 150;
            if (windowHeightLoad >= StageXBOXText) {
                StageXBOXIntro[0].classList.add("Opacity");
                StageXBOXIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= StageXBOXImg) {
                StageXBOXHeader[0].classList.add("FlipLeft");
                StageXBOXHeader[0].style.visibility = "visible";
            } if (windowHeightLoad >= StagePCText) {
                StagePCIntro[0].classList.add("Opacity");
                StagePCIntro[0].style.visibility = "visible";
            } if (windowHeightLoad >= StagePCImg) {
                StagePCHeader[0].classList.add("FlipUp");
                StagePCHeader[0].style.visibility = "visible";
            }
        }
    };

};

const removeAnimate = () => {
    HomeUTHeader[0].style.visibility = "hidden";
    HomeUTIntro[0].style.visibility = "hidden";
    HomeWKHeader[0].style.visibility = "hidden";
    HomeWKIntro[0].style.visibility = "hidden";
    HomeMechHeader[0].style.visibility = "hidden";
    HomeMechIntro[0].style.visibility = "hidden";
    HomeAboutIntro[0].style.visibility = "hidden";
    HomeAboutHeader[0].style.visibility = "hidden";
/////ModeGame////
    ModeGameWKHeader[0].style.visibility = "hidden";
    ModeGameWKIntro[0].style.visibility = "hidden";
    ModeGameJourneyHeader[0].style.visibility = "hidden";
    ModeGameJourneyIntro[0].style.visibility = "hidden";
    ModeGameCareerIntro[0].style.visibility = "hidden";
    ModeGameCareerHeader[0].style.visibility = "hidden";
////Stage/////
    StageXBOXHeader[0].style.visibility = "hidden";
    StageXBOXIntro[0].style.visibility = "hidden";
    StagePCIntro[0].style.visibility = "hidden";
    StagePCHeader[0].style.visibility = "hidden";
////ClassList////
    HomeUTIntro[0].classList.remove("Opacity");
    HomeUTHeader[0].classList.remove("FadeUp");
    HomeWKIntro[0].classList.remove("Opacity");
    HomeWKHeader[0].classList.remove("FadeUp");
    HomeMechIntro[0].classList.remove("RightTransform");
    HomeMechHeader[0].classList.remove("RightRotate360");
    HomeAboutIntro[0].classList.remove("LeftTransform");
    HomeAboutHeader[0].classList.remove("LeftRotate360");
    ModeGameWKIntro[0].classList.remove("ZoomIn");
    ModeGameWKHeader[0].classList.remove("RightSkew");
    ModeGameJourneyIntro[0].classList.remove("ZoomOut");
    ModeGameJourneyHeader[0].classList.remove("LeftSkew");
    ModeGameCareerIntro[0].classList.remove("Opacity");
    ModeGameCareerHeader[0].classList.remove("LeftTransform");
    StageXBOXIntro[0].classList.remove("Opacity");
    StageXBOXHeader[0].classList.remove("FlipLeft");
    StagePCIntro[0].classList.remove("Opacity");
    StagePCHeader[0].classList.remove("FlipUp");

    Animate();
};

const AnimateScroll = () => {
    window.addEventListener("scroll", () => {
        let currentScroll = window.scrollY;
        let windowHeight = window.innerHeight + currentScroll;
            if (Home[0].className === "Home") {
            let HomeUTText = HomeUTIntro[0].offsetTop + 150;
            let HomeUTImg = HomeUTHeader[0].offsetTop + 150;
            let HomeWKText = HomeWKIntro[0].offsetTop + 150;
            let HomeWKImg = HomeWKHeader[0].offsetTop + 150;
            let HomeMechText = HomeMechIntro[0].offsetTop + 150;
            let HomeMechImg = HomeMechHeader[0].offsetTop + 150;
            let HomeAboutText = HomeAboutIntro[0].offsetTop + 150;
            let HomeAboutImg = HomeAboutHeader[0].offsetTop + 150;
            if (windowHeight >= HomeUTText) {
                HomeUTIntro[0].classList.add("Opacity");
                HomeUTIntro[0].style.visibility = "visible";
            } if (windowHeight >= HomeUTImg) {
                HomeUTHeader[0].classList.add("FadeUp");
                HomeUTHeader[0].style.visibility = "visible";
            } if (windowHeight >= HomeWKText) {
                HomeWKIntro[0].classList.add("Opacity");
                HomeWKIntro[0].style.visibility = "visible";
            } if (windowHeight >= HomeWKImg) {
                HomeWKHeader[0].classList.add("FadeUp");
                HomeWKHeader[0].style.visibility = "visible";
            } if (windowHeight >= HomeMechText) {
                HomeMechIntro[0].classList.add("RightTransform");
                HomeMechIntro[0].style.visibility = "visible";
            } if (windowHeight >= HomeMechImg) {
                HomeMechHeader[0].classList.add("RightRotate360");
                HomeMechHeader[0].style.visibility = "visible";
            } if (windowHeight >= HomeAboutText) {
                HomeAboutIntro[0].classList.add("LeftTransform");
                HomeAboutIntro[0].style.visibility = "visible";
            } if (windowHeight >= HomeAboutImg) {
                HomeAboutHeader[0].classList.add("LeftRotate360");
                HomeAboutHeader[0].style.visibility = "visible";
            }
        } else if (ModeGame[0].className === "ModeGame") {
            let ModeGameWKText = ModeGameWKIntro[0].offsetTop + 150;
            let ModeGameWKImg = ModeGameWKHeader[0].offsetTop + 150;
            let ModeGameJourneyText = ModeGameJourneyIntro[0].offsetTop + 150;
            let ModeGameJourneyImg = ModeGameJourneyHeader[0].offsetTop + 150;
            let ModeGameCareerText = ModeGameCareerIntro[0].offsetTop + 150;
            let ModeGameCareerImg = ModeGameCareerHeader[0].offsetTop + 150;
            if (windowHeight >= ModeGameWKText) {
                ModeGameWKIntro[0].classList.add("ZoomIn");
                ModeGameWKIntro[0].style.visibility = "visible";
            } if (windowHeight >= ModeGameWKImg) {
                ModeGameWKHeader[0].classList.add("RightSkew");
                ModeGameWKHeader[0].style.visibility = "visible";
            } if (windowHeight >= ModeGameJourneyText) {
                ModeGameJourneyIntro[0].classList.add("ZoomOut");
                ModeGameJourneyIntro[0].style.visibility = "visible";
            } if (windowHeight >= ModeGameJourneyImg) {
                ModeGameJourneyHeader[0].classList.add("LeftSkew");
                ModeGameJourneyHeader[0].style.visibility = "visible";
            } if (windowHeight >= ModeGameCareerText) {
                ModeGameCareerIntro[0].classList.add("Opacity");
                ModeGameCareerIntro[0].style.visibility = "visible";
            } if (windowHeight >= ModeGameCareerImg) {
                ModeGameCareerHeader[0].classList.add("LeftTransform");
                ModeGameCareerHeader[0].style.visibility = "visible";
            }
        } else if (Stage[0].className === "Stage") {
            let StageXBOXText = StageXBOXIntro[0].offsetTop + 150;
            let StageXBOXImg = StageXBOXHeader[0].offsetTop + 150;
            let StagePCText = StagePCIntro[0].offsetTop + 150;
            let StagePCImg = StagePCHeader[0].offsetTop + 150;
            if (windowHeight >= StageXBOXText) {
                StageXBOXIntro[0].classList.add("Opacity");
                StageXBOXIntro[0].style.visibility = "visible";
            } if (windowHeight >= StageXBOXImg) {
                StageXBOXHeader[0].classList.add("FlipLeft");
                StageXBOXHeader[0].style.visibility = "visible";
            } if (windowHeight >= StagePCText) {
                StagePCIntro[0].classList.add("Opacity");
                StagePCIntro[0].style.visibility = "visible";
            } if (windowHeight >= StagePCImg) {
                StagePCHeader[0].classList.add("FlipUp");
                StagePCHeader[0].style.visibility = "visible";
            }
        }
    });
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

changeMenu();
AnimateScroll();
Animate();