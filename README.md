# Photo Booth app tutorial 🚀

**Description:**

For this tutorial we will be using [Vite](https://vitejs.dev/), vite is a development tool that allows us to have almost zero configuration and start coding rigth away.
We will cover some known javascript events to build this app. 

I hope you enjoy it 🖤

## Pre-requisites 👩‍💻 👨‍💻

1. Install [VSCode](https://code.visualstudio.com/download) 
2. Install [NodeJS](https://nodejs.org/en)

## Let's build our app!!! 📷

### Step 1: Create a Vanilla JS App using Vite ⌨️

1. Open a terminal and go to your preferred folder
2. Run the following command: `npm create vite@latest`
3. Select the following options:
4. ![image](https://github.com/orientedev/photo-booth/assets/26145998/2dc66a54-2ca4-4557-8cf8-ecfc5fa6b710)
5. Go to `photo-booth` folder and run: `npm install`
6. Once the installation is completed, lets run: `npm run dev`
7. Go to: [localhost](http://localhost:5173/)
8. If eveything went well, you should be able to see the following screen:
9. ![image](https://github.com/orientedev/photo-booth/assets/26145998/5b808ec6-3edd-4154-bb1f-db69cbc763ac)

### Step 2: Clean up current vite app 👩‍💻

1. Open the photo-booth app folder in Visual studio code.
2. Go to `index.html`
3. Change the title tag to: `Photo Booth - oriente.dev`
4. Remove the following div: `<div id="app"></div>`
5. Go to `main.js` and Clear all the content from it
7. Go to `style.css` and clear all the content from it

### Step 3: Add all necessary HTML Markup 📓

We will have a section to wrap our photo booth app, and 4 more sections inside. Lets' break them in different items so we can go through all of them:

1. Add a new section above the script tag: `<section class="app-container"></section>`
2. Inside of the `app-container` sections, lets add a new tag for the app title: `<h1>Photo Booth oriente.dev</h1>`
3. Then, lets add the video container with the button that will help us see our camera and take a photo of ourselves: 
``` html
      <section class="video-container">
        <video id="video" autoplay></video>

        <div class="button-container">
          <button id="capture-btn">Snap!</button>
        </div>
      </section>
```
4. Now, we will add an empty section to append all images that we will be taking:
``` html
      <section id="images-container">
        <!-- Images are rendered here -->
      </section>
```
5. And last but not least, we will be adding a hidden canvan element, that will allow us to actually create an image out of the video that it's streaming from the camera.
``` html
      <!-- not displayed in the web page -->
      <canvas
        id="canvas"
        width="640"
        height="480"
        style="display: none"
      ></canvas>
```
The result that we should be getting now is the following page: 

![image](https://github.com/orientedev/photo-booth/assets/26145998/6cbdd29b-70a0-4005-8b7b-0db889eb687f)

Hint: Here's the entire HTML file, just in case you migth be missing something: 

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Photo Booth - oriente.dev</title>
  </head>
  <body>
    <section class="app-container">
      <h1>Photo Booth oriente.dev</h1>

      <section class="video-container">
        <video id="video" autoplay></video>

        <div class="button-container">
          <button id="capture-btn">Snap!</button>
        </div>
      </section>

      <section id="images-container">
        <!-- Images are rendered here -->
      </section>

      <!-- not displayed in the web page -->
      <canvas
        id="canvas"
        width="640"
        height="480"
        style="display: none"
      ></canvas>
    </section>

    <script type="module" src="/main.js"></script>
  </body>
</html>
```



