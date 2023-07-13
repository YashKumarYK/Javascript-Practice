# DOM MANIPULATIONS  
### Window Object  
1. Window is a global object that is represented by Browser window.
2. The window object is supported by all browsers. It represents the browser's window.
3. Global variables are properties of the window object.
4. Global functions are methods of the window object.
5. Window object has - **DOM, BOM, JS CORE**.

**DOM**  
1. Stands for Document Object Model.
2. When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:
![image](https://github.com/YashKumarYK/Javascript-Practice/assets/97405524/c77b1906-1213-4050-b230-3937b795ecf1)

```
console.log(document.body)
```  
This prints the whole body.

**BOM**  
1. The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
2. EXAMPLE- alert().

## Fetching Elements in JS  
Users can use JavaScript to change HTML elements without overwriting them.  
There are different ways to access the HTML elements in JS:  
**1. getElementById()**  
Syntax
```
document.getElementById(element_ID);
```
1. It access the HTML element using the id.
2. It returns a single object.
3. It is called on document.

**3. getElementByClassName()**  
syntax
```
document.getElementsByClassName(element_class);
```
1. It access the HTML element using the className.
2. It returns a multiple object.
3. It is called on document.  

**4. getElementByTagName()**  
Syntax
```
document.getElementsByTagName(tag_name);
```
1. It access the HTML element using the tagname.
2. It returns a multiple object.
3. It is called on document.
4. the list is not an array.
   
**5. $0**  
Returns the most recently selected element or Javascript Object.  

**6. querySelector()**  
Syntax
```
element.querySelector(selectors);
```
1. Return the first element that matches a specified CSS selector(s) in the document.
2. Returns single object.    
**7. querySelectorAll()**  
Syntax
```
element.querySelector(selectors);
```
Same as Queryselector but it returns multiple objects.  



