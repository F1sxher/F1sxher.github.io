var app = document.getElementById('subtitle');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(150)
  .typeString('Roblox Builder')
  .pauseFor(1500)
  .deleteChars(14)
  .typeString('Roblox Scripter')
  .pauseFor(1500)
  .deleteChars(15)
  .typeString('Node.js Cder')
  .pauseFor(350)
  .deleteChars(3)
  .typeString('oder')
  .pauseFor(1500)
  .start();
