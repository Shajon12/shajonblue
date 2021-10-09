// javascript counter funtion define
var done = setInterval(counterEffectDone, 4);
var consult = setInterval(consult, 5);
var award = setInterval(award, 3);
var happy = setInterval(happy, 4);
// javascript counter effect number increment define
var nu1 = 1;
var nu2 = 1;
var nu3 = 1;
var nu4 = 1;

// javascrpt function call in here
function counterEffectDone() {
  nu1++;
  document.querySelector("#done").innerText = nu1;
  if (nu1 == 967) {
    clearInterval(done);
  }
}

function consult() {
  nu2++;
  document.querySelector("#consult").innerText = nu2;
  if (nu2 == 954) {
    clearInterval(consult);
  }
}

function award() {
  nu3++;
  document.querySelector("#award").innerText = nu3;
  if (nu3 == 925) {
    clearInterval(award);
  }
}

function happy() {
  nu4++;
  document.querySelector("#happy").innerText = nu4;
  if (nu4 == 986) {
    clearInterval(happy);
  }
}
