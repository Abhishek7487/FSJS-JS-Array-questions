const btnEl = document.querySelector("#button");
const canvasEl = document.querySelector("#canvas");

btnEl.addEventListener("click", () => {
  const generateHexCode = () => {
    const hexSize = 6;
    const hex = "#";
    const hexArr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hexCode = [];
    for (let n = 0; n < hexSize; n++) {
      hexCode.push(hexArr[Math.floor(Math.random() * 16)]);
    }
    return hex + hexCode.join("");
  };

  canvasEl.style.backgroundColor = generateHexCode();
  canvas.style.transition = ".3s";
});
