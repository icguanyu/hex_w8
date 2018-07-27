var resultTimeline = new TimelineMax({
  updated() {},
  onComplete() {}
});
//resultTimeline.pause();
resultTimeline
  .set(".scroll .triangle,.scroll .rect,.scroll .arc", {
    rotation: "45deg",
    x: -1000,
    y: 1000
  })
  .pause()
  .add("triangle_Go")
  .to(".step_0", 2, {
    opacity: 1
  })
  .add("rect_Go")
  .to(".step_1", 2, {
    opacity: 1
  })
  .add("arc_Go")
  .to(".step_2", 2, {
    opacity: 1
  })
  .to(".result", 1, {
    opacity: 1
  })
  .add("drop_Go")
  .to(".step_3", 2, {
    opacity: 1
  })
  .to(".tryagain", 1, {
    opacity: 1,
  });

var tri = [];
var rec = [];
var arc = [];
var drop = [];
var b_arc = [];
for (var i = 0; i < 9; i++) {
  tri[i] = TweenMax.to(`.tri_${i}`, `${1 + Math.random() * 2}`, {
    x: 1000,
    y: -1000,
    scale: 1 + Math.random()
  });
  resultTimeline.add(tri[i], `triangle_Go+=${0.1 * i}`);
}
var big_tri = TweenMax.to(`.big_triangle`, 2, { x: 3500, y: -1800, scale: 20 });
resultTimeline.add(big_tri, `triangle_Go+=1`);

for (var i = 0; i < 9; i++) {
  rec[i] = TweenMax.to(`.rec_${i}`, `${1 + Math.random() * 2}`, {
    x: 1000,
    y: -1000,
    scale: 0.5 + Math.random()
  });
  resultTimeline.add(rec[i], `rect_Go+=${0.1 * i}`);
}
var big_rec = TweenMax.to(`.big_rect`, 2, {
  x: 1000,
  y: 0,
  scale: 10,
  delay: 0.5
});
resultTimeline.add(big_rec, `rect_Go+=1`);

for (var i = 0; i < 9; i++) {
  arc[i] = TweenMax.to(`.arc_${i}`, `${1 + Math.random() * 2}`, {
    x: 1000,
    y: -1000,
    scale: 0.5  + Math.random()
  });
  resultTimeline.add(arc[i], `arc_Go+=${0.1 * i}`);
}
var big_arc = TweenMax.to(`.big_arc`, 2, { x: 1000, y: 0, scale: 10 });
resultTimeline.add(big_arc, `arc_Go+=1`);

for (var i = 0; i < 7; i++) {
  drop[i] = TweenMax.to(`.drop_${i}`, `${1 + Math.random() * 2}`, {
    y: 100 + Math.random() * 600,
    scale: 1 + Math.random()
  });
  resultTimeline.add(drop[i], `drop_Go+=${0.1 * i}`);
}
