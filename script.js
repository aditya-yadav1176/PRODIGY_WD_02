let time = 0;
let timer = null;

function formatTime(ms){
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(milliseconds).padStart(2, "0")
  );
}

function update(){
  document.getElementById("display").innerText = formatTime(time);
}

function start(){
  if (timer) return;
  timer = setInterval(() => {
    time += 10;
    update();
  }, 10);
}

function pause(){
  clearInterval(timer);
  timer = null;
}

function reset(){
  pause();
  time = 0;
  update();
  document.getElementById("laps").innerHTML = "";
}

function lap(){
    if (!timer) return;

    const li = document.createElement("li");
    li.innerText = `Lap ${
        document.getElementById("laps").children.length + 1
    }: ${formatTime(time)}`;

  document.getElementById("laps").appendChild(li);
}
