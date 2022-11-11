let count = 0;
let infinity = 0;
var I = 0, J = 0;
let speed = document.querySelector("#speed_input");
console.log(speed.value)
let array2;

function setmax() {
  infinity = 10000000;
  // infinity = 3000;
}
function reset() {
  window.location.reload();
}
let bubble1 = false, selection1 = false, insertion1 = false, gen = false;
function setzero() {
  infinity = 0;
  console.log(I);
  console.log(J);
  console.log(comp);
  if (bubble1 == true)
    bubblesort();
  else if (selection1 == true) {
    selectionsort();
  }
  else if (insertion1 == true) {
    insertionsort();
  }
}
const container = document.querySelector(".data-container");
var comp = 0;
document.getElementById("comp").innerHTML = comp;
var sw = 0;
document.getElementById("swap").innerHTML = sw;
function submit() {

  console.log("hi");
  document.getElementById("submit").disabled;
  array2 = document.getElementById("array");

  array2 = array2.value.split(" ").map(function (item) {
    return parseInt(item);
  });
  console.log(array2);
  console.log(array2.length);

  for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== NaN)
      count++;
  }
  array2 = array2.filter(Boolean);
  console.log(array2.length);
  console.log(count);

  if (array2.length == 0) {
    reset();
  }
  else
    rgenerate();
}
function generate() {
  if (gen == true) {
    reset();
  }
  gen = true;
  for (let i = 0; i < 20; i++) {
    let varr = Math.floor(Math.random() * 100) % 100 + 1;
    const val = varr;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${val * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = val;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

function rgenerate() {
  if (gen == true) {
    reset();
  }
  gen = true;
  for (let i = 0; i < array2.length; i++) {
    // let varr = Math.floor(Math.random() * 100) % 100 + 1;
    // console.log(varr);
    const val = array2[i];
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${val * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = val;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

// 1 2 3 34 6 6 4 3 2 3 2 33 3 34 34 34  45   45 45 4   34 33 32 
function swap(val1, val2) {
  return new Promise((resolve) => {
    var temp = val1.style.transform;
    val1.style.transform = val2.style.transform;
    val2.style.transform = temp;
    sw++;
    document.getElementById("swap").innerHTML = sw;
    window.requestAnimationFrame(
      () => {
        setTimeout(() => {
          container.insertBefore(val2, val1);
          resolve();
        }, 1550 - speed.value);
      });
  });

}

var bars, size;
function bubble() {
  bars = document.querySelectorAll(".bar");
  // const size = bars.length;
  size = bars.length;
  bubblesort()
}
async function bubblesort() {
  if (gen == false) {
    reset();
  }
  bubble1 = true;
  for (let i = I; i < size; i++) {
    for (let j = J; j < size - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
      await new Promise((resolve) => { setTimeout(() => { resolve() }, 1550 - speed.value + infinity) });
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);
      comp++;
      document.getElementById("comp").innerHTML = comp;
      if (val1 > val2) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");

      }
      bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      bars[j + 1].style.backgroundColor = "  rgb(24, 190, 255)";
      J = j;
    }
    console.log(I);
    console.log(J);
    J = 0;
    bars[size - i - 1].style.backgroundColor = "green";
    I = i;
  }
}


async function selectionsort() {
  if (gen == false) {
    reset();
  }
  let bars = document.querySelectorAll(".bar");
  const size = bars.length;
  var min_ind = 0;
  selection1 = true;
  for (let i = I; i < size; i++) {
    min_ind = i;
    //bars[i].style.backgroundColor = "darkblue";
    for (let j = i + 1; j < size; j++) {
      bars[j].style.backgroundColor = "red";
      bars[min_ind].style.backgroundColor = "red"
      await new Promise((resolve) => { setTimeout(() => { resolve() }, 1550 - speed.value + infinity) });

      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_ind].childNodes[0].innerHTML);
      comp++;
      document.getElementById("comp").innerHTML = comp;
      if (val1 < val2) {
        // if(min_ind!=i)
        // {
        //   bars[i].style.backgroundColor =  "  rgb(24, 190, 255)";

        // }
        bars[min_ind].style.backgroundColor = " rgb(24, 190, 255)";
        min_ind = j;

      }
      else
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
    }
    if (min_ind != i) {
      sw++;
      document.getElementById("swap").innerHTML = sw;
    }
    var temp1 = bars[min_ind].style.height;
    var temp2 = bars[min_ind].childNodes[0].innerText;
    bars[min_ind].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_ind].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    //swap(bars[min_ind], bars[i])
    await new Promise((resolve) => { setTimeout(() => { resolve() }, 1550 - speed.value + infinity) });

    bars[min_ind].style.backgroundColor = "  rgb(24, 190, 255)";
    bars[i].style.backgroundColor = "green";
    I = i;
  }
}

async function insertionsort() {
  if (gen == false) {
    reset();
  }
  let bars = document.querySelectorAll(".bar");
  const size = bars.length;
  insertion1 = true;
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (let i = I + 1; i < size; i++) {
    var j = i - 1;
    var key = parseInt(bars[i].childNodes[0].innerHTML);
    var barheight = bars[i].style.height;
    bars[i].style.backgroundColor = "red";
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1550 - speed.value)
    });
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      sw++;
      document.getElementById("swap").innerHTML = sw;
      comp++;
      document.getElementById("comp").innerHTML = comp;
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerHTML = bars[j].childNodes[0].innerHTML;
      j--;
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1550 - speed.value)
      });
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
    comp++;
    document.getElementById("comp").innerHTML = comp;
    bars[j + 1].style.height = barheight;
    bars[j + 1].childNodes[0].innerHTML = key;

    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1550 - speed.value + infinity)
    });

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    I = i;
  }
}
function dis() {
  document.getElementById("btn1").disabled = "true";
  document.getElementById("btn1").style.backgroundColor = "rgb(214, 209, 209);"
  document.getElementById("btn2").disabled = "true";
  document.getElementById("btn2").style.backgroundColor = "rgb(214, 209, 209);"
  document.getElementById("btn5").disabled = "true";
  document.getElementById("btn5").style.backgroundColor = "rgb(214, 209, 209);"
  document.getElementById("btn3").disabled = "true";
  document.getElementById("btn3").style.backgroundColor = "rgb(214, 209, 209);"
}

