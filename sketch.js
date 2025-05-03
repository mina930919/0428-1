let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#FFDDD2'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏預設的 HTML 視訊元素

  // 建立與視訊畫面一樣大小的 Graphics
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(0, 0, 255, 150); // 半透明藍色
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text('Overlay Content', overlayGraphics.width / 2, overlayGraphics.height / 2);
}

function draw() {
  background('#FFDDD2'); // 確保背景顏色維持
  let x = (width - capture.width) / 2; // 計算影像的水平居中位置
  let y = (height - capture.height) / 2; // 計算影像的垂直居中位置

  push(); // 儲存當前繪圖設定
  translate(width, 0); // 將原點移到畫布右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, x, y, capture.width, capture.height); // 繪製翻轉後的攝影機影像
  pop(); // 恢復繪圖設定

  // 繪製 Graphics 在視訊上方
  image(overlayGraphics, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小

  // 更新 Graphics 大小
  overlayGraphics = createGraphics(capture.width, capture.height);
  //overlayGraphics.fill(0, 0, 255, 150); // 半透明藍色
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text('Overlay Content', overlayGraphics.width / 2, overlayGraphics.height / 2);
}
