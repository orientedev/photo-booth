import "./style.css";

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureButton = document.getElementById("capture-btn");
const imagesContainer = document.getElementById("images-container");

// Initialize camera when the page loads
window.addEventListener("DOMContentLoaded", initCamera);

// Capture image when the button is clicked
captureButton.addEventListener("click", captureImage);

// Get access to the camera
async function initCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    console.error("Error accessing the camera: ", err);
  }
}

// Capture a still image
function captureImage() {
  const context = canvas.getContext("2d");

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image
  const imgData = canvas.toDataURL("image/png");

  // Display image
  const capturedImage = new Image();
  capturedImage.src = imgData;
  capturedImage.width = "200";
  capturedImage.height = "150";

  imagesContainer.prepend(capturedImage);
}
