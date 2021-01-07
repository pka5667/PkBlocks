var block_code = "";

// category is block category ex blog,contact unescape,etc. and number is block number in that category

function blockSelected(category, number) {
    var block_file_url = "allBlocks/" + category + "/" + category + number + ".html";
    document.getElementById("iframe").src = block_file_url;

    //to add border or change class to selected block called from sidemenu.ja
    blockBorder(category + number);
};

document.getElementById("iframe").onload = function() {
    //fetchCode(); will be called from colorSwitch.js
    //call from colorSwitch.js
    setMainColor(document.documentElement.style.getPropertyValue('--main-color'));
};


//also being called from colorSwitch.js after setting main color
function fetchCode() {
    block_code = document.getElementById("iframe").contentWindow.document.body.innerHTML;
    var n1 = block_code.indexOf("<section>");
    var n2 = block_code.indexOf("</section>");
    block_code = block_code.substring(n1, n2) + "</section>";

    document.getElementById("frame-for-code").innerText = block_code;
    document.getElementById("copyText").value = block_code;
};
