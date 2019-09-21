var emoji = document.getElementById("emoji");
var emojiImg = emoji.getElementsByTagName("img");

function setImage(url, pos) {

    emojiImg[pos].src = url;

}

function next(prev, nex) {
    document.getElementById(prev).style.display = "none";
    document.getElementById(nex).style.display = "block";


}

function prev(prev, nex) {
    document.getElementById(prev).style.display = "none";
    document.getElementById(nex).style.display = "block";


}