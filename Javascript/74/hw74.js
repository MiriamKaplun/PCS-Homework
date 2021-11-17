(async function () {
    'use strict';

    const userInput = $('#userInput');
    const submit = $('#submit');
    const theDiv = $('#theDiv');

    submit.click(async () => {
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${userInput.val()}&format=json&jsoncallback=?`)
            .then(info => {
                console.log('ajax got', info.items);
                theDiv.empty();
                info.items.forEach(a => {
                    theDiv.append(`<h4>${a.title}</h4><img src="${a.media.m}">`);
                });
            });
    });

}());