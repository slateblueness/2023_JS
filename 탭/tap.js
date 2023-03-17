// a태그를 클릭했을 때,
// li태그 on class 이름을 추가
// + 다른 li태그의 on class는 제거

// a태그 3개 -> 배열
const btnList = document.querySelectorAll(".list .btn");
console.log(btnList);

// 버튼 중 하나를 선택해서 이벤트 추가
for(let i=0; i<btnList.length; i++){
    btnList[i].addEventListener("click", onTap);
    // click했을 때 onTap이라는 함수가 실행되도록 이벤트 구성
}

// on class를 li에 추가하는 함수
// (e): 이벤트 객체
function onTap(e){
    // a태그를 사용할 때 새로고침 이벤트가 기본으로 있기 때문에
    // 새로고침 이벤트를 제거하고 사용
    e.preventDefault();

    // li에 있는 on을 제거하기 위해 btnList 사용
    for(let i=0; i<btnList.length; i++){
        btnList[i].parentNode.classList.remove("on");
    }

    // on class 추가
    // e.target은 이벤트가 발생한 태그 자체
    // 여기서는 이벤트를 붙여 준 btnList[0] or btnList[1] or btnList[2] 중 하나가 이벤트의 타겟이 됨
    e.target.parentNode.classList.add("on");
}