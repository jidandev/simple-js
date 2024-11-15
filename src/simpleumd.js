(function(global) {
  const Simple = (selector) => {
    return document.querySelector(selector);
  };

  Simple.click = function(selector, callback) {
    let element;
    if (typeof selector === "string") {
      element = Simple(selector);
    } else {
      element = selector;
    }

    if (!element) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }

    element.addEventListener("click", callback);
  };

  Simple.dbclick = function(selector, callback) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
  
    if (!element) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }
  
    // Pastikan callback adalah fungsi
    if (typeof callback !== "function") {
      console.error("Error: The second argument (callback) must be a function.");
      return;
    }
  
    element.addEventListener("dblclick", callback);
  };
  
  Simple.hover = function(selector, callback, callback2 = () => {}) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
  
    if (!element) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }
  
    // Pastikan callback adalah fungsi
    if (typeof callback !== "function") {
      console.error("Error: The first argument (callback) must be a function.");
      return;
    }
  
    if (callback2 && typeof callback2 !== "function") {
      console.error("Error: The second argument (callback2) must be a function.");
      return;
    }
  
    element.addEventListener("mouseover", callback);
    element.addEventListener("mouseout", callback2);
  };
  
  Simple.show = function(selector) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
    
    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
    element.style.display = "block";
  }
  
  Simple.hide = function(selector) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
    
    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
    element.style.display = "none";
  }
  
  Simple.toggle = function(selector) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
    
    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
    if(element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  
  Simple.clone = function(selector, deep = true) {
      let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
  
      if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
  
      // Clone elemen tanpa menambahkannya ke DOM
      const clonedElement = element.cloneNode(deep);
  
      // Kembalikan elemen yang di-clone untuk dipakai lebih lanjut
      return clonedElement;
    }
    
  Simple.cloneAppend = function(selector, deep = true) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
    
    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
  
      const clonedElement = element.cloneNode(deep);
  
      // Tambahkan salinan di bawah elemen asli
      element.parentNode.insertBefore(clonedElement, element.nextSibling);
      
      return clonedElement;
   }
   
   Simple.addClass = function(selector, ...className)
   {
     let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
     
     if(!element) {
       console.error(`Element with selector "${selector}" not found.`);
        return;
     }
     
     return element.classList.add(...className)
   }
   
  Simple.removeClass = function(selector, ...className)
   {
     let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
      
     if(!element) {
       console.error(`Element with selector "${selector}" not found.`);
        return;
     }
     
     return element.classList.remove(...className)
   }
   
  Simple.toggleClass = function(selector, ...className)
   {
     let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
      
     if(!element) {
       console.error(`Element with selector "${selector}" not found.`);
        return;
     }
     
     return element.classList.toggle(...className)
   }
   
  Simple.css = function(selector, property, value)
   {
     let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
      
     if(!element) {
       console.error(`Element with selector "${selector}" not found.`);
        return;
     }
     
     if (!property || value === undefined) {
        console.error("Property and value are required.");
        return;
      }
  
      // Menerapkan properti CSS
      element.style[property] = value;
   }
   
  Simple.text = function(selector, text)
   {
     let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
      
     if(!element) {
       console.error(`Element with selector "${selector}" not found.`);
        return;
     }
     
     return element.textContent = text;
   }
   
   Simple.html = function(selector, content, append = false)
   {
     let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
      
     if(!element) {
       console.error(`Element with selector "${selector}" not found.`);
        return;
     }
     
     return element.innerHTML = append ? element.innerHTML + content : content;
   }
   
  Simple.scrollTo = function(selector) {
    let element;
     if(typeof selector == "string") {
       element = Simple(selector);
     } else {
       element = selector;
     }
    
    if (!element) {
        console.error(`Element with selector "${selector}" not found.`);
        return;
      }
      return element.scrollIntoView({
        behavior: "smooth"
      });
  }
  
  Simple.toLink = function(url) {
    window.location.href = url;
  }
  
  Simple.on = function(selector, event, callback) {
    let elements;
  
    // Jika selector adalah string, gunakan Simple() untuk mendapatkan elemen
    if (typeof selector === "string") {
      elements = Simple(selector);  // Misalnya, Simple(selector) adalah querySelectorAll
    } else {
      elements = selector;  // selector sudah berupa elemen DOM
    }
  
    // Pastikan ada elemen yang ditemukan
    if (!elements) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }
  
    // Jika ada banyak elemen, iterasi dan tambahkan event listener ke setiap elemen
    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach(element => {
        element.addEventListener(event, callback);
      });
    } else if (elements instanceof HTMLElement) {
      // Jika hanya satu elemen, tambahkan event listener
      elements.addEventListener(event, callback);
    }
  };
  
  Simple.off = function(selector, event, callback) {
    let elements;
  
    // Jika selector adalah string, gunakan Simple() untuk mendapatkan elemen
    if (typeof selector === "string") {
      elements = Simple(selector);  // Misalnya, Simple(selector) adalah querySelectorAll
    } else {
      elements = selector;  // selector sudah berupa elemen DOM
    }
  
    // Pastikan ada elemen yang ditemukan
    if (!elements) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }
  
    // Jika ada banyak elemen, iterasi dan tambahkan event listener ke setiap elemen
    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach(element => {
        element.removeEventListener(event, callback);
      });
    } else if (elements instanceof HTMLElement) {
      // Jika hanya satu elemen, tambahkan event listener
      elements.removeEventListener(event, callback);
    }
  };

  global.Simple = Simple;


})(typeof window !== "undefined" ? window : this);
