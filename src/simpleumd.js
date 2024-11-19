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

  Simple.clipboard = function(text, callback = () => {}) {
    if(!text) return console.error("text should not be empty");
    
    callback();
    return navigator.clipboard.writeText(text);
  }
  
  Simple.device = function() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Cek apakah menggunakan perangkat mobile
    if (/android|iphone|ipad|ipod|windows phone/i.test(userAgent)) {
      return "mobile";
    }
    
    // Selain itu dianggap desktop
    return "desktop";
  }
  
  Simple.shuffleArray = function(array) {
    if(typeof array !== "object") return console.error("must be an array")
    
    if(array.length < 2) return console.error("array length must be greater > 1")
    
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Pilih indeks acak
      [array[i], array[j]] = [array[j], array[i]];  // Tukar elemen
    }
    
    return array;
  }
  
  Simple.metadata = function(data) {
    // Mengubah Title
    if (data.title) {
      document.title = data.title;
    }
  
    // Mengubah Description
    if (data.description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute("content", data.description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', data.description);
        document.head.appendChild(metaDesc);
      }
    }
  
    // Mengubah Keywords
    if (data.keywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (metaKeywords) {
        metaKeywords.setAttribute("content", data.keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', data.keywords);
        document.head.appendChild(metaKeywords);
      }
    }
  
    // Mengubah Author
    if (data.author) {
      let metaAuthor = document.querySelector("meta[name='author']");
      if (metaAuthor) {
        metaAuthor.setAttribute("content", data.author);
      } else {
        metaAuthor = document.createElement('meta');
        metaAuthor.setAttribute('name', 'author');
        metaAuthor.setAttribute('content', data.author);
        document.head.appendChild(metaAuthor);
      }
    }
  
    // Mengubah Open Graph Title
    if (data.ogTitle) {
      let metaOgTitle = document.querySelector("meta[property='og:title']");
      if (metaOgTitle) {
        metaOgTitle.setAttribute("content", data.ogTitle);
      } else {
        metaOgTitle = document.createElement('meta');
        metaOgTitle.setAttribute('property', 'og:title');
        metaOgTitle.setAttribute('content', data.ogTitle);
        document.head.appendChild(metaOgTitle);
      }
    }
  
    // Mengubah Open Graph Description
    if (data.ogDescription) {
      let metaOgDescription = document.querySelector("meta[property='og:description']");
      if (metaOgDescription) {
        metaOgDescription.setAttribute("content", data.ogDescription);
      } else {
        metaOgDescription = document.createElement('meta');
        metaOgDescription.setAttribute('property', 'og:description');
        metaOgDescription.setAttribute('content', data.ogDescription);
        document.head.appendChild(metaOgDescription);
      }
    }
  
    // Mengubah Open Graph Image
    if (data.ogImage) {
      let metaOgImage = document.querySelector("meta[property='og:image']");
      if (metaOgImage) {
        metaOgImage.setAttribute("content", data.ogImage);
      } else {
        metaOgImage = document.createElement('meta');
        metaOgImage.setAttribute('property', 'og:image');
        metaOgImage.setAttribute('content', data.ogImage);
        document.head.appendChild(metaOgImage);
      }
    }
  
    // Mengubah Twitter Card Title
    if (data.twitterTitle) {
      let metaTwitterTitle = document.querySelector("meta[name='twitter:title']");
      if (metaTwitterTitle) {
        metaTwitterTitle.setAttribute("content", data.twitterTitle);
      } else {
        metaTwitterTitle = document.createElement('meta');
        metaTwitterTitle.setAttribute('name', 'twitter:title');
        metaTwitterTitle.setAttribute('content', data.twitterTitle);
        document.head.appendChild(metaTwitterTitle);
      }
    }
  
    // Mengubah Twitter Card Description
    if (data.twitterDescription) {
      let metaTwitterDescription = document.querySelector("meta[name='twitter:description']");
      if (metaTwitterDescription) {
        metaTwitterDescription.setAttribute("content", data.twitterDescription);
      } else {
        metaTwitterDescription = document.createElement('meta');
        metaTwitterDescription.setAttribute('name', 'twitter:description');
        metaTwitterDescription.setAttribute('content', data.twitterDescription);
        document.head.appendChild(metaTwitterDescription);
      }
    }
  
    // Mengubah Twitter Card Image
    if (data.twitterImage) {
      let metaTwitterImage = document.querySelector("meta[name='twitter:image']");
      if (metaTwitterImage) {
        metaTwitterImage.setAttribute("content", data.twitterImage);
      } else {
        metaTwitterImage = document.createElement('meta');
        metaTwitterImage.setAttribute('name', 'twitter:image');
        metaTwitterImage.setAttribute('content', data.twitterImage);
        document.head.appendChild(metaTwitterImage);
      }
    }
  
    // Mengubah Robots Meta Tag
    if (data.robots) {
      let metaRobots = document.querySelector("meta[name='robots']");
      if (metaRobots) {
        metaRobots.setAttribute("content", data.robots);
      } else {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        metaRobots.setAttribute('content', data.robots);
        document.head.appendChild(metaRobots);
      }
    }
  
    // Mengubah Favicon
    if (data.favicon) {
      let linkFavicon = document.querySelector("link[rel='icon']");
      if (linkFavicon) {
        linkFavicon.setAttribute("href", data.favicon);
      } else {
        linkFavicon = document.createElement('link');
        linkFavicon.setAttribute('rel', 'icon');
        linkFavicon.setAttribute('href', data.favicon);
        document.head.appendChild(linkFavicon);
      }
    }
  
    // Mengubah Apple Touch Icon
    if (data.appleTouchIcon) {
      let linkAppleIcon = document.querySelector("link[rel='apple-touch-icon']");
      if (linkAppleIcon) {
        linkAppleIcon.setAttribute("href", data.appleTouchIcon);
      } else {
        linkAppleIcon = document.createElement('link');
        linkAppleIcon.setAttribute('rel', 'apple-touch-icon');
        linkAppleIcon.setAttribute('href', data.appleTouchIcon);
        document.head.appendChild(linkAppleIcon);
      }
    }
  
    // Mengubah Theme Color
    if (data.themeColor) {
      let metaThemeColor = document.querySelector("meta[name='theme-color']");
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", data.themeColor);
      } else {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        metaThemeColor.setAttribute('content', data.themeColor);
        document.head.appendChild(metaThemeColor);
      }
    }
  };
  
  Simple.textTime = function(selector, text, delay, duration) {
    let element;
  
    // Jika selector adalah string, gunakan Simple() untuk mendapatkan elemen
    if (typeof selector === "string") {
      element = Simple(selector);  // Misalnya, Simple(selector) adalah querySelectorAll
    } else {
      element = selector;  // selector sudah berupa elemen DOM
    }
  
    // Pastikan ada elemen yang ditemukan
    if (!element) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
    }
    if(!text) return console.error("text should not be empty")
    if(!delay || !duration) return console.error("delay or duration should not be empty")
    if(typeof text !== "string") return console.error("text must be a string")
    if(typeof delay !== "number" || typeof duration !== "number") return console.error("delay or duration must be a number")
    
    setTimeout(() => {
      
      let charIndex = 0;
      const typingSpeed = duration / text.length; // Durasi per karakter
  
      function typeText() {
        element.textContent = text.slice(0, charIndex); // Ketik teks karakter demi karakter
        charIndex++;
  
        // Hentikan interval setelah semua karakter selesai ditampilkan
        if (charIndex > text.length) {
          clearInterval(interval);
        }
      }
  
      const interval = setInterval(typeText, typingSpeed); // Jalankan efek mengetik
    }, delay);
  }
  
  Simple.textTimeConsole = function(text, delay) {
    if(!text) return console.error("text should not be empty")
    if(!delay) return console.error("delay should not be empty")
    if(typeof text !== "string") return console.error("text must be a string")
    if(typeof delay !== "number") return console.error("delay must be a number")
    
    setTimeout(() => {
      console.log(text)
    }, delay)
  }
  
  Simple.highlightText = function(bgColor = "yellow", textColor = "black") {
    
    if(typeof bgColor !== "string" || typeof textColor !== "string") return console.error("bgColor or textColor must be a string")
    
    let selection = window.getSelection();
        let range = selection.getRangeAt(0);
        let span = document.createElement('span');
        // span.className = 'highlight';
        span.style.backgroundColor = bgColor
        span.style.color = textColor
        range.surroundContents(span);
     
  }
  
  Simple.copy = function(selector, callback) {
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
      console.error("Error: The second argument (callback) must be a function. Use it like: Simple.copy('#selector', () => alert('hello'))");
      return;
    }
  
    element.addEventListener("copy", callback);
  };
  
  Simple.textSpeech = function(text) {
    if(text || typeof text == "string") {
      if (!('speechSynthesis' in window)) return console.log("The browser does not support Speech Synthesis.")
     
     let selection = window.getSelection().toString();
       
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    } else {
      if (!('speechSynthesis' in window)) return console.log("The browser does not support Speech Synthesis.")
     
     let selection = window.getSelection().toString();
       
        const speech = new SpeechSynthesisUtterance(selection);
        window.speechSynthesis.speak(speech);
    }
  }
  
  Simple.useId = (() => {
    let counter = 1;
  
    return (name = "j") => `${name}-${counter++}`;
  })();
  
  Simple.Button = function(options = {}, className) {
    const button = document.createElement('button');
    button.textContent = options.text || 'Default Button';
    
    //Style
    button.style.backgroundColor = options.color || 'black';
    button.style.fontWeight = 'bold';
    button.style.color = options.colorText || 'white';
    button.style.borderRadius = '9999px';
    button.style.fontSize = options.size || '16px';
    button.style.border = '0';
    button.style.padding = '10px 20px';
    button.innerHTML = options.icon ? `<i class="${options.icon}"></i> ${button.textContent}` : button.textContent;
    button.style.transition = options.smooth ? 'all .2s' : '';
    if(options.transition ){
      if(options.transition.includes("s")) {
        button.style.transition = `all ${options.transition}`;
        
      } else {
        button.style.transition = `all ${options.transition}s`;
      }
    }
    
    //class
    button.classList.add(className || `button_${Simple.useId()}`);
    
    //Event
    Simple.hover(button, () => {
      if (options.hoverEffect === "scale") {
        button.style.transform = 'scale(1.1)';
      }
    }, () => {
      button.style.transform = 'scale(1)';
    })
  
    return button
  };
  
  Simple.dragAndDrop = function(elementSelector, parentSelector) {
      const element = Simple(elementSelector)
      if (!element) {
        console.error("Elemen tidak ditemukan!");
        return;
      }
     
      element.id = Simple.useId("drag");
  
      element.draggable = true;
  
      element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', element.id);
      });
  
      if(parentSelector) {
        const target = document.body.querySelectorAll(parentSelector)
        if (!target) {
          console.error("Drop zone tidak ditemukan!");
          return;
        }
        target.forEach(zone => {
          
          zone.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
      
          zone.addEventListener('drop', (e) => {
            
            e.preventDefault();
            const draggedElementId = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(draggedElementId);
            
            zone.appendChild(draggedElement);
          });
        })
      } else {
        const target = document.body.querySelectorAll("*")
      
        if (!target) {
          console.error("Drop zone tidak ditemukan!");
          return;
        }
        target.forEach(zone => {
          
          zone.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
      
          zone.addEventListener('drop', (e) => {
            
            e.preventDefault();
            const draggedElementId = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(draggedElementId);
            
            zone.appendChild(draggedElement);
          });
        })
      }
  };
  
  Simple.formatNumber = function (number, locale = "id-ID") {
    if(!number || typeof number !== "number") return console.error("number is empty or type of number is not number");
    
    return new Intl.NumberFormat(locale).format(number);
  };
  
  Simple.create = function(parentElement, newElement, content) {
    let element;
     if(typeof parentElement == "string") {
       element = Simple(parentElement);
     } else {
       element = parentElement;
     }
  
    if (!element) {
      console.error(`Element with selector "${parentElement}" not found.`);
      return;
    }
    if(typeof newElement !== "string" || !newElement) return console.error("newElement is empty or not string");
    
    let createElement = document.createElement(newElement);
    
    createElement.innerHTML = content;
    element.appendChild(createElement);
    return createElement;
  }
  
  Simple.typing = function (selector, text, speed = 100, delay = 500) {
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
  
    let index = 0;
    let isTyping = true; // Menentukan apakah sedang mengetik atau menghapus
  
    element.style.display = "inline-block"
    element.style.borderRight = "1.5px black solid"
    function startEffect() {
      if (isTyping) {
        // Efek mengetik
        element.textContent += text[index];
        index++;
  
        if (index === text.length) {
          isTyping = false; // Ganti ke mode menghapus
          setTimeout(startEffect, delay);
        } else {
          setTimeout(startEffect, speed);
        }
      } else {
        // Efek menghapus
        element.textContent = text.substring(0, index);
        index--;
  
        if (index < 0) {
          isTyping = true; // Ganti ke mode mengetik
          index = 0; // Mulai ulang dari awal teks
          setTimeout(startEffect, delay);
        } else {
          setTimeout(startEffect, speed);
        }
      }
    }
  
    startEffect(); // Mulai animasi
  };
  
  Simple.scrollToBottom = function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };
  
  Simple.scrollToTop= function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  Simple.triggerScroll = function(triggerSelector, triggedSelector, className) {
    let triggerElement;
     if(typeof triggerSelector == "string") {
       triggerElement = Simple(triggerSelector);
     } else {
       triggerElement = triggerSelector;
     }
    
    if (!triggerElement) {
        console.error(`Element with selector "${triggerSelector}" not found.`);
        return;
      }
      
      let triggedElement;
     if(typeof triggedSelector == "string") {
       triggedElement = Simple(triggedSelector);
     } else {
       triggedElement = triggedSelector;
     }
    
    if (!triggedElement) {
        console.error(`Element with selector "${triggedSelector}" not found.`);
        return;
      }
      
     const elementObserver = new IntersectionObserver((entries) => {
       const [entry] = entries;
       
      if(entry.isIntersecting) {
        Simple.addClass(triggedElement, className);
      } else {
        Simple.removeClass(triggedElement, className);
      }
     }, {threshold: 0.9})
     
     elementObserver.observe(triggerElement)
  }
  
  Simple.randomColor = function () {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  };
  
  Simple.capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  Simple.arrayUnique = function (arr) {
    return [...new Set(arr)];
  };
  
  Simple.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  Simple.deepMerge = function (target, source) {
    for (const key in source) {
      if (source[key] instanceof Object) {
        Object.assign(source[key], Simple.deepMerge(target[key] || {}, source[key]));
      }
    }
    return { ...target, ...source };
  };
  
  Simple.hexToRGB = function (hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  };
  
  Simple.rgbToHex = function (r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  };
  
  Simple.encrypt = function (text) {
    return btoa(unescape(encodeURIComponent(text)));
  };
  
  Simple.decrypt = function (encryptedText) {
    return decodeURIComponent(escape(atob(encryptedText)));
  };
  
  Simple.generateGradient = function (direction = "right") {
    const color1 = Simple.randomColor();
    const color2 = Simple.randomColor();
    return `linear-gradient(to ${direction}, ${color1}, ${color2})`;
  };
  
  Simple.limitText = function (text, maxLength = 100) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };
  
  Simple.setCookie = function (name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };
  
  Simple.getCookie = function (name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  Simple.lyrics = function(text, delay, duration) {
    const totalCharacters = text.length;
    const characterDuration = duration / totalCharacters; 

    // Menunggu delay sebelum mulai menampilkan teks
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          process.stdout.write(text[i]); // Menampilkan karakter satu per satu
          i++;
        } else {
          clearInterval(interval); // Menghentikan interval setelah selesai
          process.stdout.write("\n"); // Tambahkan baris baru setelah selesai
        }
      }, characterDuration); // Menampilkan tiap karakter berdasarkan perhitungan durasi
    }, delay); // Tunggu delay sebelum mulai menampilkan teks
  }

  global.Simple = Simple;


})(typeof window !== "undefined" ? window : this);
