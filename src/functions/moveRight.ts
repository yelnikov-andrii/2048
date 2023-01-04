import { addNewDigit } from "./addNewDigit";

export function moveRight(ar: any) {
  let arr = JSON.parse(JSON.stringify(ar));
  let checkTheMoveWasDone = 0;
  let winner = false;
for (let i = 3; i >= 0; i--) {
  const rows = arr.filter((el: any) => el.y === i);
  for (let j = 3; j >= 1; j--) {
    const currentEl = rows.find((col: any) => col.x === j);
    const prevEl = rows.find((col: any) => col.x === j - 1);
    if (currentEl) {
      if (prevEl.value === 0) {
        continue;
      }
      if (currentEl.value === 0) {
        const newPosition = {x: prevEl.x, y: prevEl.y}
            const newPositionForPrevEl = {x: currentEl.x, y: currentEl.y}
            currentEl.x = newPosition.x;
            currentEl.y = newPosition.y;
            prevEl.x = newPositionForPrevEl.x;
            prevEl.y = newPositionForPrevEl.y;
        j=4;
        checkTheMoveWasDone++;
        continue;
    } else {
      if (prevEl.value === currentEl.value) {
        const newPosition = {x: prevEl.x, y: prevEl.y}
            const newPositionForPrevEl = {x: currentEl.x, y: currentEl.y};
            prevEl.x = newPositionForPrevEl.x;
            prevEl.y = newPositionForPrevEl.y;
            currentEl.x = newPosition.x;
            currentEl.y = newPosition.y;

            const newValue = prevEl.value * 2;
            prevEl.value = newValue;
            currentEl.value = 0;
            if (newValue === 2048) {
              winner = true;
            }
        j=4;
        checkTheMoveWasDone++;
        break;
      } else {
        continue;
      }
    }
    }
  }
}
if (checkTheMoveWasDone > 0) {
    arr = addNewDigit(arr);
}
return [arr, winner];
}