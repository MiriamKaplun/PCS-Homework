(function () {
    'use strict';

    const nameInput = $("#name");
    const addressInput = $("#address");
    $("form").submit(function (e) {
        e.preventDefault();
        console.log(nameInput.val(), addressInput.val());
        $("#displayName").text(nameInput.val());
        $("#displayAddress").text(addressInput.val());
    });

}());