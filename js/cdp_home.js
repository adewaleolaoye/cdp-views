$(document).ready(()=>{

    "use strict"

$('.dot-menu span').on('click',()=>{
    $('.ul-background').toggle();
});

$('.edit').on('click', ()=>{
    $('.edit').hide();

    const input = `<form class="form-dashboard" action="/form" method="POST">
                    <input placeholder="Type to change..." class="dashboard-input" type="text" />
                    <input type="submit" value="change"/>
                </form>  `

     $('.head-h1').replaceWith(input);
     $('form').submit((e)=>{
        e.preventDefault();
       const value = $('.dashboard-input').val();
       
       console.log(value);


     const h1 = `<h1 class="head-h1"> ${value ? value:'Konga Ltd'} </h1>`
        console.log(`testing if ${e} it works`);
        $('.form-dashboard').replaceWith(h1);

        console.log(e);
        $('.edit').show();
     })

    //  $('dashboard-input').on('')

});


 
        // $('.dashboard-input').blur(()=>{
        //     $('.dashboard-input').replaceWith(h1);
        // })

 
        
});