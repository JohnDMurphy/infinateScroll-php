let oset = 0;
let iload = 1;
let holdload = false;

$(function () {
  loadArt(8);
});

$(window).scroll(function () {
  if (
    $(window).scrollTop() >=
    $(document).height() - $(window).height() - 100
  ) {
    loadArt(1);
  }
});

function loadArt(a) {
  if (!holdload) {
    let holder = { oset: oset, iload: a };
    holdload = true;
    $.ajax({
      url: 'api.php',
      type: 'POST',
      data: holder,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        for (let i = 0; i < data.content.length; i++) {
          oset++;
          let item = data.content[i];
          let html =
            '<div class="box">' +
            item.id +
            ' ' +
            item.content +
            ' ' +
            item.date +
            '</div>';
          $('#content').append(html);
        }
        holdload = false;
      },
    });
  }
}
