var qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 300,
  height : 300,
  useSVG: true
});

function makeCode () {
  var elText = document.getElementById("text");

  qrcode.makeCode(elText.value);
  //event.preventDefault();
  //Convertendo svg em canvas
  var canvas = document.getElementById("canvas");
  var svg = $("#svg").html().replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(" xlink=", " xmlns:xlink=").replace(/\shref=/g, " xlink:href=");
  canvg(canvas, svg);
  //alert("convert to canvas");

  //Convertendo canvas em png
  var data = canvas.toDataURL("image/png");
  $('#imagem').attr('src', data);
  $('#canvas').hide();
}

makeCode();

$("#tey").click(function() {
  makeCode();
});

$('#forms').keypress(function(ev) {
    if (ev.which === 13) {
  $('#tey').click();
}

});



$("#text").on("blur", function () {
  makeCode();
}).

//on("keydown", function (e) {
  //if (e.keyCode == 13) {
  //  makeCode();
//  }
//});
