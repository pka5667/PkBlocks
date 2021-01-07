function viewCode() {
    document.getElementById("copy-code").style.display = "";
    document.getElementById("preview-code").style.display = "";
    document.getElementById("view-code").style.display = "none";

    document.getElementById("frame-for-preview").style.display = "none";
    document.getElementById("frame-for-code").style.display = "";
}

function preview() {
    document.getElementById("copy-code").style.display = "none";
    document.getElementById("preview-code").style.display = "none";
    document.getElementById("view-code").style.display = "";

    document.getElementById("frame-for-preview").style.display = "";
    document.getElementById("frame-for-code").style.display = "none";
}

function copyToClipBoard() {
    var copyText = document.getElementById("copyText");
    copyText.select();
    document.execCommand("copy");

    alert("Code copied");
}