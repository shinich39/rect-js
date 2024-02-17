## rect-js

Rectangle utilities in javascript.

## Usage

```js
import rectJs from "rect-js";
```

- cover
- contain
- inside
- rotate

```js
const srcWidth = 100;
const srcHeight = 200;
const dstWidth = 1000;
const dstHeight = 1000;
const maxWidth = 1000;
const maxHeight = 1000;
const minWidth = 200;
const minHeight = 200;
const angle = 45;

rectJs.cover(srcWidth, srcHeight, dstWidth, dstHeight);
// { width: 1000, height: 2000 }

rectJs.contain(srcWidth, srcHeight, dstWidth, dstHeight);
// { width: 500, height: 1000 }

rectJs.inside(srcWidth, srcHeight, maxWidth, maxHeight, minWidth, minHeight);
// { width: 200, height: 400 }

rectJs.rotate(srcWidth, srcHeight, angle),
// { width: 212.13203435596424, height: 212.13203435596427 }
```