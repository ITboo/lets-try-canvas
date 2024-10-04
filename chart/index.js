const canvasPlot = document.getElementById("canvas_plot");
const ctx = canvasPlot.getContext("2d");

const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

ctx.font = "18px Arial";
ctx.textAlign = "left";
ctx.textBaseline = "top";

const scaleX = 50;
const scaleY = 50;
const shiftNames = 5;
const shiftAxisNames = 30;

const xAxis = Math.round(canvasPlotWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(canvasPlotHeight / scaleY / 2) * scaleY;

// рисуем клетки
ctx.beginPath();
ctx.strokeStyle = "lightgray";

for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
  ctx.moveTo(i, 0);
  ctx.lineTo(i, canvasPlotHeight);
  ctx.fillText((i - xAxis) / scaleX, i + shiftNames, yAxis + shiftNames);
}
for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
  ctx.moveTo(0, i);
  ctx.lineTo(canvasPlotWidth, i);
  ctx.fillText((i - yAxis) / scaleY, xAxis + shiftNames, i + shiftNames);
}
ctx.stroke();
ctx.closePath();

// рисуем оси

ctx.beginPath();
ctx.strokeStyle = "black";

ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight);
ctx.fillText("y", xAxis + shiftAxisNames, 0);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);
ctx.fillText("x", canvasPlotWidth-shiftAxisNames, yAxis + shiftAxisNames);

ctx.stroke();
ctx.closePath();

// Рисуем график
// y=x^2

for (let i = 0; i <= canvasPlotWidth; i++) {
  const x = (i - xAxis) / scaleX;
  const y = Math.pow(x, 2);
  ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}

/*
Xdec = (Xcanvas-xAxis)/scaleX
Ydec = (yAxis-Ycanvas)/scaleY

xcanvas = xAxis+xdec*scaleX
ycanvas = yAxis - ydec*scaleY*/
