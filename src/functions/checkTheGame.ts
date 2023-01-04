import { Box } from "../type";

export function checkTheGame(boxes: Box[], cells: Box[]) {
  let gameOver = false;
  if (boxes.length === cells.length) {
    let check = 0;
    for (let i = 0; i <= 3; i++) {
      const row = boxes.filter(box => box.x === i);
      for (let j = 0; j <= 3; j++) {
        const currentElement = row.find(e => e.x === i && e.y === j);
        if (currentElement) {
          const siblingOne = boxes.find(el => el.x === i + 1 && el.y === j);
          const siblingTwo = boxes.find(el => el.x === i - 1 && el.y === j);
          const siblingThree = boxes.find(el => el.x === i && el.y === j + 1);
          const siblingFour = boxes.find(el => el.x === i && el.y === j - 1);
          const siblingsArr = [siblingOne, siblingTwo, siblingThree, siblingFour];
          if (siblingsArr.some(e => e !== undefined && currentElement && e.value === currentElement.value)) {
            check++;
            break;
          }
        }
      }
    }

    if (check === 0) {
      gameOver = true;
    }
  }

  return gameOver;
}