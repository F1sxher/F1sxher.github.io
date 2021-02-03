var app = document.getElementById('box');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(150)
  .typeString('I\'m Fisher, A simple human that scripts and codes in roblox and node.js. You can check out some of my profiles below!')
  .pauseFor(1500)
  .start();
