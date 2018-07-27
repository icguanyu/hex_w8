window.addEventListener("scroll", function() {
  let currentY = window.scrollY;
  let pageHeight = $("html").height() - window.innerHeight;
  let progress = currentY / pageHeight;
  //console.log(progress);
  timeline.progress(progress);
  resultTimeline.progress(progress);
  timeline.pause();
});

var timeline = new TimelineMax({
  updated() {},
  onComplete() {}
});

//timeline.pause();
timeline
  .to(".start .rect", 2, {
    scale: 1.8,
    ease: Elastic.easeOut.config(1, 0.2)
  })
  .add("rect")
  .to(".start .rect", 0.5, {
    width: "100%",
    height: "100%"
  })
  .to(".start", 3, {
    opacity: 0
  })
  .add(loadQuestion)
  .from(".question_area", 0.5, {
    opacity: 0,
    y: 100
  })
  .from(".process_bar",0.5,{
    opacity: 0,
    y: -50
  })
  .from(".process",0.5,{
    width:0
  })

var rectFadeIn = TweenMax.from(".start .rect", 2, { opacity: 0 });
var rectRotate = TweenMax.to(".start .rect", 2, { rotation: 180 });
var arcScale = TweenMax.to(".start .arc", 2, { scale: 2.2 });
var star = TweenMax.to(".start .triangle", 2, { scale: 2.4, rotation: 360 });
var welcome = TweenMax.to(".start .welcome", 4, { y: "+=5" });

var arcHide = TweenMax.to(".start .arc", 1.5, { scale: 10 });
var triHide = TweenMax.to(".start   .triangle", 1.5, { scale: 18 });

timeline.add(rectFadeIn, 0);
timeline.add(rectRotate, 0);
timeline.add(arcScale, 0);
timeline.add(star, 0);
timeline.add(welcome, 0.3);

timeline.add(arcHide, "rect+=0.3");
timeline.add(triHide, "rect+=0.6");

var now = 0;
var score = 0;
$(".q_block")
  .eq(now)
  .show();

var data = [
  {
    index: 0,
    question: "這是第一個問題",
    info: "這裡可以放說明",
    answer: [
      {
        ans: "分數+0", //答案一
        s: 0 //分數
      },
      {
        ans: "分數+1",
        s: 1
      },
      {
        ans: "分數+2",
        s: 2
      }
    ]
  },
  {
    index: 1,
    question: "這是第二個問題",
    info: "這裡可以放說明",
    answer: [
      {
        ans: "分數+0",
        s: 0
      },
      {
        ans: "分數+1",
        s: 1
      },
      {
        ans: "分數+2",
        s: 2
      }
    ]
  },
  {
    index: 2,
    question: "這是第三個問題",
    info: "這裡可以放說明",
    answer: [
      {
        ans: "分數+0",
        s: 0
      },
      {
        ans: "分數+1",
        s: 1
      },
      {
        ans: "分數+2",
        s: 2
      }
    ]
  }
];
function loadQuestion() {
  $(".inner").empty();
  $(".inner").append(`
    <h1>Q${data[now].index + 1}</h1>
    <h4>${data[now].question}</h4>
    <p>${data[now].info}</p>
    </div>
  `);
  for (var i = 0; i < data[now].answer.length; i++) {
    $(".inner").append(
      `<div class="answer" data-score="${data[now].answer[i].s}">${
        data[now].answer[i].ans
      }</div>`
    );
  }
}

var q_blockMove = 0;//題目左右滑動動畫
$(".question").on("click", ".answer", function(e) {
  if (q_blockMove == 0 && now < data.length - 1) {
    q_blockMove =
      $(".question_area").outerWidth() - $(".question").outerWidth();
  } else {
    q_blockMove = 0;
  }

  $(".inner").fadeOut();
  $(".question").animate({ left: q_blockMove + "px" }, 600, function() {
    $(".inner").empty();
    loadQuestion();
    $(".inner").fadeIn();
  });
  //console.log(this.dataset.score);//取得data-item分數
  
  if (now < data.length-1) {
    now++;
    $('.process').css({width : (now+1)*33.33+'%'})
  } else {
    $('.begin').animate({opacity:0},1000,()=>{
      $('.begin').remove()
      $('.scroll').fadeIn()
      $('.step_3 h1').empty().append(`${score}分`)
      $('body,html').css({overflow:'auto'})
    })
  }

  score += this.dataset.score * 1; //*1=轉成數值
  console.log(score)
  
});
$('.tryagain').on('click',function(){
  window.location.reload()
  //window.navigate(location)
})

