'use strict';

function cover(srcWidth, srcHeight, dstWidth, dstHeight) {
  let aspectRatio = srcWidth / srcHeight;
  if (aspectRatio <dstWidth /dstHeight) {
    return {
      width:dstWidth,
      height:dstWidth / aspectRatio
    }
  } else {
    return {
      width:dstHeight * aspectRatio,
      height:dstHeight
    }
  }
}

function contain(srcWidth, srcHeight, dstWidth, dstHeight) {
  let aspectRatio = srcWidth / srcHeight;
  if (aspectRatio <dstWidth /dstHeight) {
    return {
      width:dstHeight * aspectRatio,
      height:dstHeight
    }
  } else {
    return {
      width:dstWidth,
      height:dstWidth / aspectRatio
    }
  }
}

function inside(srcWidth, srcHeight, maxWidth, maxHeight, minWidth, minHeight) {
  let aspectRatio = srcWidth / srcHeight;
  if (!minWidth) {
    minWidth = 0;
  }
  if (!minHeight) {
    minHeight = 0;
  }
  if (aspectRatio < maxWidth / maxHeight) {
    maxWidth = maxHeight * aspectRatio;
  } else {
    maxHeight = maxWidth / aspectRatio;
  }
  if (aspectRatio < minWidth / minHeight) {
    minHeight = minWidth / aspectRatio;
  } else {
    minWidth = minHeight * aspectRatio;
  }
  return {
    width: Math.min(maxWidth, Math.max(minWidth, srcWidth)),
    height: Math.min(maxHeight, Math.max(minHeight, srcHeight))
  }
}

function rotate(srcWidth, srcHeight, degree) {
  let radians = degree * Math.PI / 180,
      sinFraction = Math.sin(radians),
      cosFraction = Math.cos(radians);
  if (sinFraction < 0) {
    sinFraction = -sinFraction;
  }
  if (cosFraction < 0) {
    cosFraction = -cosFraction;
  }
  return {
    width: (srcWidth * cosFraction) + (srcHeight * sinFraction),
    height: (srcWidth * sinFraction) + (srcHeight * cosFraction)
  }
}

export default {
  cover: cover,
  contain: contain,
  inside: inside,
  rotate: rotate,
}
