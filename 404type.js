var app = document.getElementById('subtitle');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(150)
  .typeString('Uh oh! Looks like you\'re a bi t lst')
  .pauseFor(350)
  .deleteChars(5)
  .typeString('t lost')
  .pauseFor(1500)
  .start();
