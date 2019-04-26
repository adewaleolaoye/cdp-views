// This script create user's template
$(document).ready(function() {
  let data = {
    appid: "271345",
    token: "7afee5243386ed7c0ad3ae95b22aa105"
  };

  // load user's app
  $.post({
    url: "http://10.0.0.110:3300/vereafy/listapp",
    data: JSON.stringify(data)
  }).done(function(res) {
    let result = typeof res === "object" ? res : JSON.parse(res);
    var selectApp = result.response.data;
    // console.log(selectApp);

    for (i in selectApp) {
      $("#listapp").append(
        `<option value="${selectApp[i].dev_id}">${selectApp[i].app_name}</option>`
      );
    }
  });

  $("#saveTemplate").on("click", function(e) {
    e.preventDefault();
    // Get user's template name, template pattern, selected App value and ref_id
    let templateName = $(".templateName")
      .val()
      .trim();
    let templatePattern = $(".templatePattern")
      .val()
      .trim();
    let selectedApp = $("#listapp").val();

    // validate user's template Name, Template Pattern, and Selected App
    if (templateName === "") {
      $(".error").text("Template Name is required");
      return;
    }

    if (templatePattern === "" || !templatePattern.includes("#token#")) {
      $(".error").text("Template Pattern must include #token#");
      return;
    }

    if (selectedApp === "") {
      $(".error").text("Select an App");
      return;
    }

    let sendData = {
      body: messagePattern,
      name: templateName,
      dev_app_id: selectedApp,
      appid: "271345",
      token: "7afee5243386ed7c0ad3ae95b22aa105",
      type: "voice"
    };

    // Create new template
    $.post({
      url: "http://10.0.0.110:3300/vereafy/newtem",
      data: JSON.stringify(sendData)
    }).done(function(res) {
      let result = typeof res === "object" ? res : JSON.parse(res);
      console.log(result);
      if (result.error) {
        $(".error")
          .text(result.error)
          .removeClass("success");
        return;
      }
      $(".success")
        .text(result.response)
        .removeClass("error");
      return;
    });
  });
});
