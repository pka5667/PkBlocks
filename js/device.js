function desktop() {
    document.getElementById("iframe").style.width = "100%";
    document.getElementById("iframe").style.height = "100vh";
    document.getElementById("iframe").style.border = "none";

    document.getElementById("device-desktop").style.opacity = "1";
    document.getElementById("device-tablet").style.opacity = "0.3";
    document.getElementById("device-mobile").style.opacity = "0.3";
}

function tablet() {
    document.getElementById("iframe").style.width = "760px";
    document.getElementById("iframe").style.height = "1020px";
    document.getElementById("iframe").style.border = "2px solid black";

    document.getElementById("device-desktop").style.opacity = "0.3";
    document.getElementById("device-tablet").style.opacity = "1";
    document.getElementById("device-mobile").style.opacity = "0.3";
}

function mobile() {
    document.getElementById("iframe").style.width = "425px";
    document.getElementById("iframe").style.height = "732px";
    document.getElementById("iframe").style.border = "2px solid black";

    document.getElementById("device-desktop").style.opacity = "0.3";
    document.getElementById("device-tablet").style.opacity = "0.3";
    document.getElementById("device-mobile").style.opacity = "1";
}