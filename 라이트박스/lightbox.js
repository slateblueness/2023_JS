// 사진을 클릭했을 때(이벤트)
// lightbox의 이미지가 클릭한 이미지로 바뀜
// lightbox의 display가 block으로 바뀜
// lightbox를 클릭했을 때 display가 none으로 바뀜(이벤트 사용)

// 사진을 클릭했을 때
// 사진이 여러 개이기 때문에 배열로 가지고 옴
const pics = document.querySelectorAll(".imagebox .pic");
const lightbox = document.querySelector("#lightbox");

// 사진 하나의 이벤트를 먼저 확인한 후 반복문으로 추가
for(let i=0; i<pics.length; i++){
    pics[i].addEventListener("click", showLightbox);
}

// 사진을 클릭했을 때 라이트박스가 실행되도록 함수 작성
function showLightbox(e){
    // 이미지 수정
    // data-이름으로 작성한 값은 dataset을 통해 접근
    const imgTag = e.target
    let img = imgTag.dataset.src;
    
    // 이미지 값을 가져와서 lightbox의 이미지에 추가
    const lightboxImage = lightbox.firstElementChild;
    lightboxImage.src = img;

    // 라이트박스 보임
    lightbox.style.display = "block";
}

// 라이트박스를 클릭했을 때 라이트박스가 사라짐
lightbox.addEventListener("click", function(){
    lightbox.style.display = "none";
})