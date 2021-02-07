export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function getCount(count) {
  if (count < 0) return;
  if (count < 100000) {
    return count;
  } else if (Math.floor(count / 100000) < 1000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}