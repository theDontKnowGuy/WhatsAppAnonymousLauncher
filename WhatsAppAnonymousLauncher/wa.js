function isValidNumber() {
    let n = document.getElementById("waNumber").value;
    n = n.replace(/[^a-zA-Z0-9() ]/g, '');
    if (n.search("9720") == 0) n = n.replace("972", "");
    if (n.search("0") == 0) n = n.replace("0", "972");
    if (n.length>=12) {
    var url = "whatsapp://send/?phone=" + n + '&text&app_absent=0';
    var windowObjectReference;
    windowObjectReference = window.open(url);
    console.log(n);
    return true;
    }
    else
    {   
      document.getElementById("em1").style.visibility='visible';
      return false;
    }
}

function clearErrorMessage(){
    document.getElementById("em1").style.visibility='hidden';
}

document.getElementById('f1').onsubmit = function() {
  return isValidNumber();
};

const im = document.getElementById("i1");
im.addEventListener("click", isValidNumber,true);

const ip = document.getElementById("waNumber");
ip.addEventListener("input", clearErrorMessage,false);

