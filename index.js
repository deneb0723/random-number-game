//HTML element 지정
const range = document.querySelector("#js-range"),
  maxCount = document.querySelector(".maxCount"),
  myNumber = document.querySelector("#js-input"),
  chooseNum = document.querySelector(".chooseNum"),
  randomNum = document.querySelector(".randomNum"),
  result = document.querySelector(".result"),
  submitBtn = document.querySelector("#js-submit");

//최대값 HTML 태그에 input(realtime으로)
range.oninput = function () {
  maxCount.innerHTML = range.value;
};

//Play 버튼 클릭시 함수 설정
function handleBtn() {
  //input값 10진수 정수로 지정(string->number)
  const chooseNumber = parseInt(myNumber.value, 10);

  //최대값안에서 무작위 정수 생성
  const randomNumber = Math.floor(Math.random() * range.value + 0);

  //input 값과  무작위 생성된 정수 HTML 태그에 입력
  chooseNum.innerHTML = `You choose: ${chooseNumber},`;
  randomNum.innerHTML = `the machine choose: ${randomNumber}.`;

  /*게임 결과 표시(input값과 무작위 생성된 정수값이 같을 경우 이김, 다를경우 짐,
								아무것도 입력되지 않았을때에는 경고창 생성 후 reload*/
  if (chooseNumber === randomNumber) {
    result.innerHTML = "You Win!";
  } else if (myNumber.value === "") {
    alert("Choose your number!");
    window.location.reload();
    return false;
  } else {
    result.innerHTML = "You lost!";
  }
}

function init() {
  submitBtn.addEventListener("click", handleBtn);
}

init();
