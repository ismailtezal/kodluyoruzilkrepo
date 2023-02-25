let myName = document.getElementById("myName");
let myClock = document.getElementById("myClock");

welcomeGuest = () => {
  username = prompt("Lütfen adınızı Giriniz");
  myName.innerHTML = username;
};

showTime = () => {
  const date = new Date().toLocaleDateString("tr-TR", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  timeText = date.toString();
  timeText = timeText.split(" ");
  myClock.innerHTML = `${timeText[1]} ${timeText[0]}`;
  let time = setTimeout(function () {
    showTime();
  }, 500);
};

main = () => {
    welcomeGuest();
    showTime();    
}

main();