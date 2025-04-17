function generateQRCode() {
    const text = document.getElementById("text").value;
    const colorDark = document.getElementById("colorDark").value;
    const colorLight = document.getElementById("colorLight").value;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 200,
      height: 200,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // Автоматически сгенерировать QR при загрузке
  window.onload = generateQRCode;