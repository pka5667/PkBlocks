function openSideBar() {
    var left = document.getElementById("sidebar").style.left;

    if (left != "0px") {
        document.getElementById("sidebar").style.left = "0px";
        document.getElementById("nav-left").style.marginLeft = "180px";

        document.getElementById("open-sidebar-button").style.display = "none";
        document.getElementById("close-sidebar-button").style.display = "";
    } else {
        document.getElementById("sidebar").style.left = "-160px";
        document.getElementById("nav-left").style.marginLeft = "20px";

        document.getElementById("open-sidebar-button").style.display = "";
        document.getElementById("close-sidebar-button").style.display = "none";
    }
    document.getElementById("sidebar").style.display = "";
}

//to add border or change class to selected block
function blockBorder(blockID) {
    blocks = document.getElementsByClassName("block-item");
    for (i = 0; i < blocks.length; i++) {
        if (blocks[i].id == blockID) {
            blocks[i].classList.add("is-active");
        } else if (blocks[i].classList.contains("is-active")) {
            blocks[i].classList.remove("is-active");
        }
    }
}