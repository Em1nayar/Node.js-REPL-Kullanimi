let arguments = process.argv.slice(2);

function circleArea(r) {
  let pi = 3.14159265359;
  let area = pi * Math.pow(r, 2);
  console.log(
    `Yarıçapı (${r}) olan dairenin alanı: (${parseFloat(area).toFixed(2)})`
  );
}

circleArea(parseFloat(arguments[0]));