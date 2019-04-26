$(document).ready(function() {
  $(".edit").on("click", () => {
    $(".edit, img.link, span.url").hide();
    $(".update").addClass("d-none");
    $(".save, input.text-line").show();

    // const input = `<form class="form-dashboard" action="/form" method="POST">
    //                 <input type="text" class="text-line" placeholder="Deleivery Report Endpoint">
    //                 <input type="submit" value="change"/>
    //             </form>  `;

    // $("span.url").replaceWith(input);
    // $("form").submit(e => {
    //   e.preventDefault();
    //   const value = $(".dashboard-input").val();

    //   console.log(value);

    //   const h1 = `<h1 class="head-h1"> ${value ? value : "Konga Ltd"} </h1>`;
    //   console.log(`testing if ${e} it works`);
    //   $(".form-dashboard").replaceWith(h1);

    //   console.log(e);
    //   $(".edit").show();
    // });

    //  $('dashboard-input').on('')
  });
});
