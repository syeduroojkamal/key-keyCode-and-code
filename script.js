window.addEventListener("keydown", (e) => {
  document.getElementById("pressedKey").innerHTML = `${e.key}`;
  document.getElementById("pressedKeyCode").innerHTML = `${e.keyCode}`;
  document.getElementById("pressedCode").innerHTML = `${e.code}`;
});
