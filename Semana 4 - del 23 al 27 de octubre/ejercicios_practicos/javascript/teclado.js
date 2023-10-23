const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = document.querySelector(ball),
    $stage = document.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      // move("left");
      if (limitsBall.left > limitsStage.left + 45) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      // move("top");
      if (limitsBall.top > limitsStage.top + 45) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      // move("right");
      if (limitsBall.right > limitsStage.right - 45) {
        e.preventDefault();
        x--;
      }
      x++;
      break;
    case 40:
      // move("down");
      if (limitsBall.bottom < limitsStage.bottom - 45) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e);
  // console.log(e.type);
  // console.log(`Ctrl: ${e.ctrlKey} | Shift: ${e.shiftKey} | Alt: ${e.altKey}`);

  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmación con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado un aviso (prompt) con el teclado");
  }
}
