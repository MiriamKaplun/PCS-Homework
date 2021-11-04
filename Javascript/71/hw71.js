(function () {
    'use strict';

    $('#theForm').submit(e => {
        e.preventDefault();
        $('#theDiv').append('loading.....');
        const fileInput = $('#fileNameInput').val();

        setTimeout(() => {
            fetch(fileInput)
                .then(r =>
                    r.json()
                )
                .then(t => {
                    $('#theDiv').html('');
                    t.forEach(peep => {
                        console.log(peep.first, peep.last);
                        $('#theDiv').append(peep.first + ' ' + peep.last + '<br>');
                    });
                })
                .catch(err => $('#theDiv').html('OOPS ' + err));
        }, 2000);

    });

}());