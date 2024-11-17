# `Simple Js`

<a  href="https://github.com/jidandev/simple-js"><img  src="/assets/image/simplejs-logo.png"  alt="Simple Js logo"  width="200"></a>

This package is to shorten the syntax in JavaScript, the library features are simple.

## CDN
### Script Tag
```sh
<script src="https://cdn.jsdelivr.net/npm/@jidan/simple-js/dist/simple.umd.js"></script> 
```

## NPM
### Installation
```bash
$ npm init -y
$ npm install parcel-bundler @jidan/simple-js 
```
### Usage
```js
import Simple from "@jidan/simple-js"
```
### Run Project
```bash
$ npx parcel index.html
```

## Syntax
### Get Dom
to get the object model document
#### Usage
```js
Simple(element: string)
```
#### Example
```js
//without variables
Simple("#id");
//with variabel
const elementId = Simple("#id");
```
### Event Click
to add a click event to an html element
#### Usage
```js
Simple.click(element: string | HTMLElement, callback: function)
```
#### Example
```js
Simple.click("#button", () => alert("Click"));
```

### Event Double Click
to add a double click event to an html element
#### Usage
```js
Simple.dbclick(element: string | HTMLElement, callback: function)
```
#### Example
```js
Simple.dbclick("#button", () => alert("Double click"));
```

### Event Hover
to add a hover event to an html element
#### Usage
```js
Simple.hover(element: string | HTMLElement, enter: function, out?: function)
```
#### Example
```js
//callback for out is not required ( opsional )

//without out 
Simple.hover("#button", () => alert("Enter"));

//with out
Simple.hover("#button", () => alert("enter"), () => alert("out"))
```

### Show Element
to show html elements or set display to "block"
#### Usage
```js
Simple.show(element: string | HTMLElement)
```
#### Example
```js
Simple.show("#button");
```

### Hide Element
to hide html elements or set display to "none"
#### Usage
```js
Simple.show(element: string | HTMLElement)
```
#### Example
```js
Simple.show("#button");
```

### Toggle show/hide Element
to toggle the html element to sho(display: block) or hide (display: none)
#### Usage
```js
Simple.toggle(element: string | HTMLElement)
```
#### Example
```js
Simple.toggle("#button");
```

### Add Class
to add class to html element
#### Usage
```js
Simple.addClass(element: string | HTMLElement, class: string)
```
#### Example
```js
Simple.addClass("#button", "color");
```

### Remove Class
to remove class to html element
#### Usage
```js
Simple.removeClass(element: string | HTMLElement, class: string)
```
#### Example
```js
Simple.removeClass("#button", "color");
```

### Set Metadata
to set html metadata
#### Usage
```js
Simple.metadata(data: object)
```
#### Example
```js
Simple.metadata
(
 {
     title: "Simple Js"
 }
);
```
#### Object Data
```js
{
  title: "Page Title",
  description: "Page Description",
  keywords: "library, simplejs",
  ogTitle: "Open Graph Title",
  ogDescription: "Open Graph Description",
  ogImage: "https://example.com/og-image.png",
  twitterTitle: "Twitter Title",
  twitterDescription: "Twitter Description",
  twitterImage: "https://example.com/twitter-image.png",
  favicon: "https://example.com/favicon.ico",
  robots: "noindex, nofollow",
  themeColor: "#ffffff",
  appleTouchIcon: "https://example.com/apple-touch-icon.png"
}
```

### Text Time ( Lyrics )
to display text sequentially, similar to the typing effect but slightly different (usually for music lyrics)
#### Usage
```js
Simple.textTime(element: string | HTMLElement, text: string, delay: number, duration: number)
```
#### Example
```js
Simple.textTime("#lyrics", "Something bad is 'bout to happen to me", 11000, 4100);
```

### Highlight Text
to highlight selected text
#### Usage
```js
Simple.highlightText(bgColor?: string, textColor?: string)
```
#### Example
```js
//Combinate with copy event
//The text will be highlighted after the user presses copy
Simple.copy("#text", () => Simple.highlightText())
```

### Text to Speech 
convert text to speech
#### Usage
```js
Simple.textSpeech(text?: string)
```
#### Example
```js
//Combinate with event copy
//The text will change into sound when you copy the text.
Simple.copy("#text", () => Simple.textSpeech())
```
### Generate Unique Id
to generate a unique id
#### Usage
```js
Simple.useId(name?: string)
```
#### Example
```js
console.log(Simple.useId()) //Output: j-1
console.log(Simple.useId("sigma")) //Output sigma-2
```

### Create New Element
to create html elements 
#### Usage
```js
Simple.create(parentElement: string | HTMLElement, newElement: string, content: string)
```
#### Example
```js
Simple.create(".container", "h1", "Hello World!")
```

### merge objects
to merge objects 
#### Usage
```js
Simple.deepMerge(target: object, source: object)
```
#### Example
```js
const name = {
    name: "Joe Goldberg"
};
const age = {
    age: 20
};

const data = Simple.deepMerge(name, age);
console.log(data) // Output: {name: "Joe Goldberg", age: 20}
```

### Effect Typing Looping
to add typing animation to html text elements
#### Usage
```js
Simple.typing(element: string | HTMLElement, text: string, speed?: number, delay?: number)
```
#### Example
```js
Simple.typing("#text", "Hello World!")
//default speed: 100ms, delay: 500ms
```

### Trigger Scroll
to trigger a class when scrolling, for example if the element is in the viewport, it will add a class to that element and if it leaves the viewport, the class will be removed
#### Usage
```js
Simple.triggerScroll(triggerElement: string | HTMLElement, triggedElement: string | HTMLElement, className: string) 
```
#### Example
##### Css
```js
.container {
  position: relative;
  width: 100px;
  height: 100px;
  background: rgba(0,0,0,0);
  margin: 10px 0 10px 0;
}

.object {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: green;
  transform: translateX(-150%);
  transition: all .5s;
}

.scrolled {
  opacity: 1;
  transform: translateX(100%);
}
```
##### Javascript
```js
Simple.triggerScroll(".container", ".object", "scrolled") 
```

### Other Syntax
cape ngetik, jadi gua kasih sintaks nya aja 
```js
Simple.css(element: string | HTMLElement, property: string, value: string)
Simple.text(element: string | HTMLElement, text: string)
Simple.html(element: string | HTMLElement, html: string, append?: boolean)
Simple.on(element: string | HTMLElement, event: string, callback: function)
Simple.scrollTo(element: string | HTMLElement) 
Simple.toLink(url: string)
Simple.clone(element: string | HTMLElement, deep?: boolean)
Simple.cloneAppend(element: string | HTMLElement, deep?: boolean)
Simple.toggleClass(element: string | HTMLElement, class: string)
Simple.clipboard(text: string, callback?: function)
Simple.device()
Simple.shuffleArray(array)
Simple.textTimeConsole(text: string, delay: number)
Simple.copy(element: string | HTMLElement, callback: function)
Simple.dragAndDrop(elementSelector: string | HTMLElement, dropZone?: string | HTMLElement)
Simple.formatNumber(number: number, country: string) //Example country: "id-ID"
Simple.scrollToBottom()
Simple.scrollToTop()
Simple.randomColor()
Simple.capitalize(text: string)
Simple.arrayUnique(array)
Simple.getRandomInt(min: number, max: number)
Simple.hexToRGB(hex: string)
Simple.rgbToHex(r: number, g: number, b: number)
Simple.encrypt(text: string)
Simple.decrypt(encryptedText: string)
Simple.generateGradient(direction?: string)
Simple.limitText(text: string, maxLength: number)
Simple.setCookie(name: string, value: string, days: number)
Simple.getCookie(name: string)
```

### Components Syntax
### Button
#### Usage
```js
Simple.Button(options?: object, className?: string)
```
#### Options
```js
const options = {
  text: "Click Me", //Default: "Default Button"
  color: "green", //Default: black
  colorText: "white", //Default: white
  size: "20px", //Default: 16px
  icon: "", //optional 
  hoverEffect: "scale", //optional
  smooth: true, //optional def: false
  transition: ".3s" //optional, include: smooth
}
```
#### Example
```js
const button = Simple.Button({color: "red"});

document.body.appendChild(button)
```

<br>

## Support

<a href="https://saweria.co/JidanDev">Saweria</a>

<br>

## Link
> [My Portfolio](https://jidandev.github.io/portfolio ) &nbsp;&middot;&nbsp;

> [My Github](https://jidandev.github.io/portfolio ) &nbsp;&middot;&nbsp;