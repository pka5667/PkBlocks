function onLoad() {
    document.getElementById("copy-code").style.display = "none";
    document.getElementById("preview-code").style.display = "none";
    document.getElementById("view-code").style.display = "";

    document.getElementById("frame-for-preview").style.display = "";
    document.getElementById("frame-for-code").style.display = "none";

    document.getElementById("sidebar").style.display = "none";

    blockSelected('Blog', '1');

    openSideBar();
}

onLoad();

//this function is called in block.js
// document.getElementById("iframe").onload = function() {
//     gotCode();
// };

desktop(); //to set opacity and device to desktop