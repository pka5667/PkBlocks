//call when button switcher clicked and when new block is selected

function setMainColor(color) {
    document.documentElement.style.setProperty('--main-color', color);

    document.getElementById("iframe").contentWindow.document.getElementById("colorChangeStyleDiv").innerHTML = "<style>.bg-color-change{background-color:" + color + ";}.txt-color-change{color:" + color + ";}</style>";
    //set the copyCOde again from get selected blockcode.js 
    currentTheme();
}

function currentTheme(){
    if(!document.getElementById("sidebar").classList.contains("dark-mode")){
        whiteTheme();
    }
    else{darkTheme();}
}

//change theme
function themeSwitcher(){
    if(!document.getElementById("sidebar").classList.contains("dark-mode")){
        darkTheme();
    }
    else{whiteTheme();}
}

function darkTheme() {
    //add dark theme to body
    if(!document.getElementById("sidebar").classList.contains("dark-mode")){
        document.body.classList.toggle("dark-mode");
        document.getElementById("sidebar").classList.toggle("dark-mode");
    }

    //add dark theme to iframe
    if(document.getElementById("iframe") != null){
        if(!document.getElementById("iframe").contentWindow.document.getElementById("section").classList.contains("dark-mode")){
            document.getElementById("iframe").contentWindow.document.getElementById("section").classList.toggle("dark-mode");
            
            var allDarkEnable = document.getElementById("iframe").contentWindow.document.getElementsByClassName("darkEnable");
            for(i=0;i<allDarkEnable.length;i++){
                console.log(allDarkEnable[i]);
                allDarkEnable[i].classList.toggle("dark-mode");
            }
        }
    }
        fetchCode();
}

function whiteTheme(){
    //remove dark theme to body
    if(document.getElementById("sidebar").classList.contains("dark-mode")){
        document.body.classList.remove("dark-mode");
        document.getElementById("sidebar").classList.remove("dark-mode");
    }

    //remove dark theme to iframe
    if(document.getElementById("iframe") != null){
        if(document.getElementById("iframe").contentWindow.document.getElementById("section").classList.contains("dark-mode")){
            document.getElementById("iframe").contentWindow.document.getElementById("section").classList.remove("dark-mode");
            
            var allDarkEnable = document.getElementById("iframe").contentWindow.document.getElementsByClassName("darkEnable");
            for(i=0;i<allDarkEnable.length;i++){
                console.log(allDarkEnable[i]);
                allDarkEnable[i].classList.remove("dark-mode");
            }
        }
    }
        fetchCode();
}