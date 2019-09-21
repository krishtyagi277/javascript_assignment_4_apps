var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {

    if (this.readyState === 4) {
        if (this.status == 200) {
            console.log("call is successful");
            var playlistData = JSON.parse(this.responseText);
            for (var i = 0; i < playlistData.length; i++) {
                createDynamicPlaylist(playlistData[i]);
            }
        }
        else {
            console.log("call is failed");
        }
    }
};

httpRequest.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', true);
httpRequest.send();

/* <div id="card1" class="playlist-card active-card">
                        <img class="thumbnail" src="https://i.vimeocdn.com/video/600595198_390x220.webp" />
                        <h3 class="video-card-title">Croissants | Flour and Stone</h3>
 </div>
  */

var playlistWrapper = document.getElementById("playlist-wrapper");

function createDynamicPlaylist(data) {
    var card = document.createElement("div");
    card.id = data.id;
    card.className = "playlist-card";
    var img = document.createElement("img");
    img.src = data.thumbnail;
    img.className = "thumbnail";
    img.setAttribute('onClick', "mainVideo(" + data.id + ")");
    var h3 = document.createElement("h3");
    h3.className = "video-card-title";
    var h3TextNode = document.createTextNode(data.title);
    h3.appendChild(h3TextNode);
    h3.setAttribute('onClick', "mainVideo(" + data.id + ")");
    card.appendChild(img);
    card.appendChild(h3);

    playlistWrapper.appendChild(card);
}

function mainVideo(id) {

    httpRequest.onreadystatechange = function () {

        if (this.readyState === 4) {
            if (this.status == 200) {
                console.log("call is successful");
                var videoData = JSON.parse(this.responseText);
                document.getElementById("video-player").src = "https://player.vimeo.com/video/" + videoData.vimeoId;
                document.getElementById("views-count").innerHTML = videoData.views;
                document.getElementById("video-title").innerHTML = videoData.title;
                document.getElementById("video-description").innerHTML = videoData.description;
                document.getElementById(id).classList = " active-card";
            }
            else {
                console.log("call is failed");
            }
        }
    };

    httpRequest.open('GET', 'http://5d76bf96515d1a0014085cf9.mockapi.io/video/' + id, true);
    httpRequest.send();
}

