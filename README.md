# JavaScript Mini Demo

This project creates a simple webpage that demonstrates JavaScript browser features, including:

- the Date object
- Number conversion and validation
- arithmetic and number formatting
- conditional if/else messages

## Files

- `index.html`
- `script.js`
- `style.css`
- `README.md`
- `screenshot.png` — screenshot of the finished webpage

## Built-in Objects and Methods

- `Date`: `new Date()`, `getMonth()`, `getDate()`, and `getFullYear()`
- `String`: `String()` and `padStart()`
- `Number`: `Number()`, `Number.isNaN()`, `Number.isInteger()`, `toFixed()`, `toLocaleString()`, `Number.parseFloat()`, and `Number.parseInt()`
- `document`: `getElementById()`, `textContent`, and `innerHTML`

## GitHub Repository

- Repository: https://github.com/killerpigwolf/Daniel-Isayan-CIT384-HW9

## GitHub Pages

- Website: https://killerpigwolf.github.io/Daniel-Isayan-CIT384-HW9/

## Screenshot

The finished webpage screenshot is saved in [`screenshot.png`](screenshot.png).

## Reflection

Part 1 was easiest for me because it took only a few steps and used specific commands to display the date. Part 3 was hardest because it had the most calculations and took me the longest to figure out. I learned that the `Date` object represents the current date and time and has methods to get parts like the month, day, and year. I learned that the `Number` object helps convert, check, and format numerical data. I learned that displaying results in a browser is straightforward: JavaScript can find an HTML element and put text or other content in it.

## References

- [JavaScript `Date` object (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`Date()` constructor (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [`Date.prototype.getMonth()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
- [`Date.prototype.getDate()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
- [`Date.prototype.getFullYear()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
- [`String.prototype.padStart()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [`Document.getElementById()` (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [`Node.textContent` (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

## Run the page locally

Open `index.html` in a browser, or use a local web server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```
