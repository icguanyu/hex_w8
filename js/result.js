var resultTimeline = new TimelineMax({
  updated() {},
  onComplete() {}
});
resultTimeline.pause()
resultTimeline
  .set(".scroll .triangle", {
    rotation: "45deg",
    x: -1000,
    y: 1000
  })
  .add("triangle_Go")

var tri = []
for(var i=0;i<9;i++){
  tri[i] = TweenMax.to(`.tri_${i}` ,`${1+Math.random()*2}`, {x: 1000, y: -1000 });
  resultTimeline.add(tri[i],`triangle_Go+=${0.1*i}`)
}
var tri_9 = TweenMax.to(`.tri_9` ,2, {x: 3500, y: -1800, scale:20 })
resultTimeline.add(tri_9,`triangle_Go+=1`)