// filename: complex_code.js
// Content: Complex code that generates a fractal tree

// Function to draw a line from (x1, y1) to (x2, y2)
function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Function to recursively create a fractal tree
function createFractalTree(ctx, x, y, length, angle, branchFactor) {
  if (length < 5) {
    return;
  }

  const x2 = x + length * Math.cos(angle);
  const y2 = y + length * Math.sin(angle);
  drawLine(ctx, x, y, x2, y2);

  const nextLength = length * 0.8;
  const angleDiff = Math.PI / branchFactor;
  for (let i = -branchFactor; i <= branchFactor; i++) {
    const angleOffset = angleDiff * i;
    createFractalTree(ctx, x2, y2, nextLength, angle + angleOffset, branchFactor);
  }
}

// HTML canvas element and 2D rendering context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas width and height
canvas.setAttribute("width", "800");
canvas.setAttribute("height", "600");

// Set line color and width
ctx.strokeStyle = "#000000";
ctx.lineWidth = 1;

// Set initial position and length for the fractal tree
const startX = canvas.width / 2;
const startY = canvas.height - 50;
const startLength = 200;

// Call the function to create the fractal tree
createFractalTree(ctx, startX, startY, startLength, -Math.PI / 2, 7);