/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let newStr = str;

  if (newStr.length >  maxlength){
    newStr = newStr.slice(0, maxlength-1) + "…";
  } 

  return newStr;
}