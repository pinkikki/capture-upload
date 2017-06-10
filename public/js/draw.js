const medias = {audio : false, video : {
        facingMode : {
            exact : "environment"
        }
    }},
    video  = document.getElementById("video");
    canvas = document.getElementById("canvas"),
    ctx    = canvas.getContext("2d");

navigator.getUserMedia(medias, successCallback, errorCallback);

requestAnimationFrame(draw)

function successCallback(stream) {
    video.srcObject = stream;
};

function errorCallback(err) {
    console.log(err)
};

function draw() {
    ctx.drawImage(video, 0, 0);
    requestAnimationFrame(draw);
}

function save() {
    let d = canvas.toDataURL('image/png');
    d = d.replace('image/png', 'image/octet-stream');
    document.getElementById("capture").value = d;
    document.getElementById("form").submit();
};