$(document).ready(()=>{

    "use strict"
   // Login Form validation and Ajax 


   $('.email').on('keyup',()=>{

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    let $email = $('.email').val();
    const validEmail =  re.test($email)

    
    if($email && ( $email.length > 1 && validEmail)){
        $(".submit").prop('disabled',true);
    } else{
        $(".submit").prop('disabled',true);

    }


   })

   $('.password').on('keydown',()=>{
    let $password = $('.password').val();

    if(($password && $password.length > 5)){
        $(".submit").prop('disabled',true);

    }
    
   })



   $('.email, .password').on('keyup',()=>{

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    let $email = $('.email').val();
    let $password = $('.password').val();
    let $message = '<div class="pass-info"> Check that your email and password are valid </div>'
    const validEmail =  re.test($email)

    


    if(($email && validEmail) && ($password && $password.length > 5)){
        $(".submit").prop('disabled',false)
        console.log('good %d', $password.length)
    }
    
   else{
    console.error('error');
    return  
    
   }

   

});
        
});