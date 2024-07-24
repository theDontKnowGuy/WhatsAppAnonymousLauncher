function isValidNumber() {
  let n = document.getElementById("waNumber").value;
  n = n.replace(/[^a-zA-Z0-9]/g, '');
  if (n.search("0") == 0) n = n.replace("0", "972");
  var url = "https://wa.me/" + n;

  var windowObjectReference;
  windowObjectReference = window.open(url);
  console.log(n);
  return true;
}

function clearErrorMessage() {
  document.getElementById("em1").style.visibility = 'hidden';
}

document.getElementById('f1').onsubmit = function () {
  return isValidNumber();
};

const im = document.getElementById("i1");
im.addEventListener("click", isValidNumber, true);

const ip = document.getElementById("waNumber");
ip.addEventListener("input", clearErrorMessage, false);
