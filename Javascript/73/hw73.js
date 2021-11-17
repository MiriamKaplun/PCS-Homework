(async function () {
    'use strict';

    const video = $('#video');
    const videoList = $('#videoList');
    const title = $('#title');

    async function fetchFile(fileName) {
        try {
            const response = await fetch(`${fileName}`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const recipe = await response.json();
            return recipe;
        } catch (e) {
            console.error('OOPS, ERROR', e);
        }
    }

    const videos = await fetchFile("videos.json");
    console.log(videos);
    videos.forEach(v => {
        const listItem = $(`<li><h3>${v.videoName}</h3><img src=${v.pic}></li>`).appendTo(videoList);
        listItem.click(async () => {
            console.log(v.videoName, v.pic);
            title.text(v.videoName);
            video.attr("src", v.url)[0].play();
        });
    });

}());