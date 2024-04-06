/**
 * 해커스타일로 문자열을 찾습니다.
 * 화면이 촤르르륵 나오게 수정해야함
 * @param {string} inputString 찾을 문자열
 * @returns 출력
 */


function hacker_like_string_printer_ascii(inputString) {
  let result = "";
  for (let a of inputString) {
    for (var i = 0; i < 128; i++) {
      if (String.fromCharCode(i) == a) {
        result += a;
        console.log(result);
        break;
      } else {
        console.log(result + String.fromCharCode(i));
      }
    }
  }
}

function hacker_like_string_printer_character(inputString) {
  let result = "";
  for (let a of inputString) {
    if (a === ' ') {
      result += " ";
      continue;
    }

    if (a.charCodeAt(0) < 65 || a.charCodeAt(0) > 122 || (a.charCodeAt(0) > 90 && a.charCodeAt(0) < 97)) {
      result += "_";
      continue;
    }

    for (let i = 65; i <= 90; i++) { // 대문자 범위
      if (String.fromCharCode(i) == a) {
        result += a;
        console.log(result);
        break;
      } else {
        console.log(result + String.fromCharCode(i));
      }
    }

    for (let i = 97; i <= 122; i++) { // 소문자 범위
      if (String.fromCharCode(i) == a) {
        result += a;
        console.log(result);
        break;
      } else {
        console.log(result + String.fromCharCode(i));
      }
    }
  }

}

hacker_like_string_printer_character("hello")

module.exports = {
  hacker_like_string_printer_character,
  hacker_like_string_printer_ascii,
};
