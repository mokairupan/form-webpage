$(document).ready(function() {
    $ ("#signup").validate({
        rules: {
            fname:{
                required: true,
                minlength: 5,
                maxlength: 10,
            },
            sname:{
                required: true,
            },
            day:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
            mail:{
                required: true,
            },
            mobile:{
                required: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
            Re_password: {
                required: true,
                minlength: 8,
                value:$("password").value,
            }
        }
    })
});