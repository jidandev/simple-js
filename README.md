# `Simple Js`

<a  href="https://github.com/jidandev/simple-js"><img  src="/assets/image/simplejs-logo.png"  alt="Simple Js logo"  width="200"></a>

This package is to shorten the syntax in JavaScript, the library features are simple.

## CDN
### Script Tag
```sh
<script src="https://cdn.jsdelivr.net/npm/@jidan/simplejs/dist/simple.umd.js"></script> 
```

## NPM
### Installation
```bash
$ npm init -y
$ npm install parcel-bundler @jidan/simplejs 
```
### Usage
```js
import Simple from "@jidan/simplejs"
```
### Run Project
```bash
$ npx parcel index.html
```

## Syntax
### â¢ Get Dom
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
### â¢ Event Click
to add a click event to an html element
#### Usage
```js
Simple.click(element: string | HTMLElement, callback: function)
```
#### Example
```js
Simple.click("#button", () => alert("Click"));
```

### â¢ Event Double Click
to add a double click event to an html element
#### Usage
```js
Simple.dbclick(element: string | HTMLElement, callback: function)
```
#### Example
```js
Simple.dbclick("#button", () => alert("Double click"));
```

### â¢ Event Hover
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

### â¢ Show Element
to show html elements or set display to "block"
#### Usage
```js
Simple.show(element: string | HTMLElement)
```
#### Example
```js
Simple.show("#button");
```

### â¢ Hide Element
to hide html elements or set display to "none"
#### Usage
```js
Simple.show(element: string | HTMLElement)
```
#### Example
```js
Simple.show("#button");
```

### â¢ Toggle show/hide Element
to toggle the html element to sho(display: block) or hide (display: none)
#### Usage
```js
Simple.toggle(element: string | HTMLElement)
```
#### Example
```js
Simple.toggle("#button");
```

### â¢ Add Class
to add class to html element
#### Usage
```js
Simple.addClass(element: string | HTMLElement, class: string)
```
#### Example
```js
Simple.addClass("#button", "color");
```

### â¢ Remove Class
to remove class to html element
#### Usage
```js
Simple.removeClass(element: string | HTMLElement, class: string)
```
#### Example
```js
Simple.removeClass("#button", "color");
```

### â¢ Other Syntax
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
```

<br>

## Support

<a href="">Saweria</a>

<br>

## Link
> [My Portfolio](https://jidandev.github.io/portfolio ) &nbsp;&middot;&nbsp;

> [My Github](https://github.com/jidandev) 