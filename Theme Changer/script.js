let userinputEl = document.getElementById("userinput");
let themeEl = document.getElementById("theme");


function changefunction(event){
    if(event.key === "Enter"){
        if(userinputEl.value === "Dark"){
            themeEl.style.backgroundImage = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)"
            themeEl.style.color = "white";
        } else if(userinputEl.value === "Light"){
            themeEl.style.backgroundImage = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)"
            themeEl.style.color = "red";
        } else {
            alert("Enter the valid theme");
        }
    }
}

userinputEl.addEventListener("keydown",changefunction);