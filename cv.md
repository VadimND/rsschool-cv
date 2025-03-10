## Contact Info
__Email:__ javadimus@gmail.com  
__Phone:__ +375 29 870-39-14  
__Nickname on Github:__ VadimND  
__Telegram Username:__ @javadimus  

## Summary
My full name is Vadim Dyshlevich.
I work as a programmer in a trade company and strive to expand my skills in web-development.  
I am particularly interested in front-end and related technologies: Javascript, HTML&CSS, web design and back-end a bit (PHP, NodeJS). 
Before I got a job as a programmer, I was engaged in freelancing for almost five years. Now I'm trying to get a deep knowledge of JavaScript and teamwork.  
My current English level is B1 (Intermediate). 

## Skills
 
HTML & CSS: 100 / 100

Javascript: 90 / 100

JQuery: 82 / 100

VueJS: 80 / 100

Laravel: 75 / 100

MySQL, ORACLE SQL: 75 / 100            

PHP: 80 / 100

NodeJS: 60 / 100

ASP / ASP.NET: 60 / 100
                

## Code examples
* Replacing styles based on date attributes (JS)
* Class for form validation, calculating the cost of services and sending to the server (ASP, JS, Ajax)
* Sending a form with an attachment (ASP, JS, Ajax)
* Solving tasks on Codewars

### Prefill an Array
```
function prefill(n, v) {  
    if (isNaN(n)) {
        throw new TypeError(n + " is invalid");
    }
    if (n === Infinity || n === -Infinity) {
        throw new TypeError(n + " is invalid");
    }
    if (n < 0) {
        throw new TypeError(n + " is invalid");
    }
    if (typeof n === 'boolean') {
        throw new TypeError(n + " is invalid");
    }
    if (!isNaN(n) && n.toString().indexOf('.') != -1) {
        throw new TypeError(n + " is invalid");
    }
    let arr = [];
    
    for(let i = 0; i < n; i++) {
        arr.push(v);
    }                            
    return arr;                           
    
}
``` 
### Count words
```
function countWords(str) {  
    let res; 
    let arr = [];
    if(str !== "" && !str.includes(" ") && !str.includes("")) {    
        res = 1;
    }
    if(str !== "" && !str.includes(" ") && str.includes("")) {    
        res = 0;
    }
    if(str !== "" && str.includes(" ")) {
        res = str.trim().split(" ");
        for (let i = 0; i < res.length; i++) {
            if (res[i] !== "") {
                arr.push(res[i]);
            }
        }
        res = arr.length;
    }      
    if(str === "" || str === "") {
        res = 0;
    } 
    if (str.indexOf("") === 0 && str.includes(" ")) {
        str = str.replace(str.charAt(0), "")
        res = str.match(//g).length + 1;
    }   
    if (str.indexOf("") > 0 ) {
        res = str.match(//g).length + 1;
    }                           
    return res;  
}
```
### Query for division stores on central and regional
SELECT DISTINCT p1.PRODUCT_ID, e1.NAME, p1.AMOUNT
    FROM b_catalog_store_product p1
      LEFT JOIN b_iblock_element e1 ON p1.PRODUCT_ID = e1.ID
        WHERE p1.STORE_ID IN (56,53,77,81,90,107,54,80,82,84,88,89,102,105,106,52,2,103,93,1,51,92,97,99,100,96,98,109,94,95,5,6,104,96,125,109,119,123,1,51,118,124)
        AND p1.AMOUNT > 0
        AND e1.ACTIVE LIKE 'Y'
        AND p1.PRODUCT_ID IN (
          SELECT p2.PRODUCT_ID
             FROM b_catalog_store_product p2
                LEFT JOIN b_iblock_element e2 ON p2.PRODUCT_ID = e2.ID
                   WHERE p2.STORE_ID IN  (3,4,7,8,9,10,11,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,79,83,85,86,87,91,101,110,112,111,120,121,126,115,108,113,114,122)
                   AND e2.ACTIVE LIKE 'Y'
  GROUP BY p2.PRODUCT_ID
  HAVING SUM(p2.AMOUNT) = 0
);
## Experience 
I presented my first project in 2015 during the defense of my thesis. This work included creating a website from scratch for a beauty Studio. As a result, I successfully defended my work. After studying at the Institute, I also have a lot of practical work related to creating web pages.  
I have created several websites that are still working. In addition to creating, I also support several online projects. My current job is related to website development. I created a website for a large state library.

## Education and Courses 
* Institute of business and management of technology of Belarusian state University (specialty "Web-design and computer graphics")
* RssSchool (Js, 2020)
* GeekBrains (JavaScript JavaScript, HTML, PHP, English)* 
* Codecademy (JS, React, Angular)
* HTMLAcademy (html, css)
* Codewars (JS)
