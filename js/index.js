(function() {
  const baseUrl = location.origin;
  console.log(window.location);
  $.get({
    url: `${baseUrl}/headerAndSidebar/header.html`
  })
    .done(htmlHeaderContent => {
      $(".__header").html(htmlHeaderContent);
    })
    .fail(err => {
      console.log(err);
    });

  $.get({
    url: `${baseUrl}/headerAndSidebar/sidebar.html`
  })
    .done(htmlSidebarContent => {
      $(".__sidebar").html(htmlSidebarContent);
    })
    .fail(err => {
      console.log(err);
    });

  $("body").on("click", e => {
    console.log(e.target);
    if ($(e.target).is(".dot3x")) {
      $("header .ul-background").toggle();
    } else {
      $("header .ul-background").css({
        display: "none"
      });
    }
  });
  $("body").on("click", ".loadapps", function(e) {
    var target = e.target.id;
    $.get({
      url: `myapps/${target}.html`
    })
      .done(data => {
        $(".dynamic-content").html(data);
      })
      .fail(error => {
        console.log(error);
      });
  });
})();
