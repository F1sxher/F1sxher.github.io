var app = document.getElementById('subtitle');
var app2 = document.getElementById('box');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

var typewriter2 = new Typewriter(app, {
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

typewriter2
  .pauseFor(150)
  .typeString('I\'m Fisher, A simple human that scripts and codes in roblox and node.js. You can check out some of my profiles below!')
  .pauseFor(1500)
  .start();
