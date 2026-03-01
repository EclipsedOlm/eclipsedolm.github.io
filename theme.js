if(localStorage.getItem("theme") === null){
    localStorage.setItem("theme", "default");
}

const stylesheet = document.documentElement.style;
const themes = new Map([
    ["default", ["#ffffaa", "#ffffee"]],
    ["retro", ["green", "lightgreen"]],
]);

function themeRefresh(){

    let currTheme = localStorage.getItem("theme");
    
    if(themes.has(currTheme) === false){
        localStorage.setItem("theme", "default");
        currTheme = localStorage.getItem("theme");
    }

    stylesheet.setProperty("--primary", themes.get(currTheme)[0]);
    stylesheet.setProperty("--secondary", themes.get(currTheme)[1]);

}

function setTheme(newTheme = "default"){

    localStorage.setItem("theme", newTheme);
    themeRefresh();

}
