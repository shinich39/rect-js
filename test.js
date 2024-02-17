import rectJs from "./index.js";

const src = {
  w: 100,
  h: 200,
}

const dst = {
  w: 1000,
  h: 1000
}

console.log(

  rectJs.cover(src.w, src.h, dst.w, dst.h),
  rectJs.contain(src.w, src.h, dst.w, dst.h),
  rectJs.inside(src.w, src.h, dst.w, dst.h, 200, 200),
  rectJs.rotate(src.w, src.h, 45),
)