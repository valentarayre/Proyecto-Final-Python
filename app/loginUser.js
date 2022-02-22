const urlBack ='http://127.0.0.1:5000' 
$("#loginUser").on('submit', function(){    
    var email = $("#email").val();
    var password = $("#password").val();
    

    if(email=='' || password=='') alert("Please fill in all fields");
    else
    {
        $.ajax({
            type: "POST",
            url: urlBack+"/api/validtoken",
            data: {
                "email":"correo1@gmail.com",
                "password":"12345"
            },
            cache: false,
            statusCode: {
                200: (result) =>{
                    alert(result);
                }
            }
       });
    }
    return false;
});