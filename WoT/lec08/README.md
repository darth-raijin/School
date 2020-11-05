Exercise: Input validation
--------------------------

[regexp.html](regexp.html) contains a form with a single input field.

For each input character, the user input is validated by calling `validDate`.

Fix `validDate`: write a regular expression that matches the date format `dd/mm/yyyy` and
tests the `input` parameter against it.


Exercise: Cookies
-----------------

[cookie-server.js](cookie-server.js) outputs a simple page and sets a
cookie that is passed with later requests.

Change the server so that a later visit (e.g., a client-side page
reload) produces a different output page with `"Hello again"`.


Clearing the cookie on the client-side might be helpful to observe the difference.
You can do so with
- the JavaScript console in Chrome:
  ```
   document.cookie = "MyCookie=abc123; Expires=Tue, 15 Jan 2013 21:47:38 GMT;"
  ```
  (this just sets the expiry date to some time in the past)

- Chrome's developer tools:
  ```
   Application -> Storage -> Cookies
  ```


Exercise: Hack the chat!
------------------------

[chat-server.js](chat-server.js) and [chat-client.html](chat-client.html)
contain a (vulnerable) version of the WebSocket-chat from earlier.

Can you inject a script to pop-up an alert box with "hacked!"?

Can you redirect the page, e.g., to https://www.dr.dk?

Note:
 - In HTML5 `innerHTML` will not execute `script` tags,
    as described under `Security considerations' here:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
	
 - To avoid a vulnerability such as this, it is recommended to use
    `elem.textContent = data;` instead of `elem.innerHTML = data;`
    https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#web-messaging


Exercise: Secure the Chat!
--------------------------

Prevent XSS attacks on [chat-server.js](chat-server.js) by escaping
special characters in messages:

 - Install the `validator` package
   ```
    npm install validator
   ```

 - Load the package:
   ```
    let validator = require('validator');
   ```

 - Now the function `validator.escape` can be used to replace
   `<`, `>`, `&`, `'`, `"` and `/` in strings with HTML entities.
 

Package documentation: https://www.npmjs.com/package/validator
