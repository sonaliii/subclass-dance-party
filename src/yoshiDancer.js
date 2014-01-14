var YoshiDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="yoshi"></span>');
  this.setPosition(top, left);
  window.dancers.push(this);
};

YoshiDancer.prototype = Object.create(Dancer.prototype);
//BlinkyDancer.prototype.constructor = BlinkyDancer;

YoshiDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  this.move();
};

YoshiDancer.prototype.move = function(){
  this.$node.animate({
    left: '+=25'
  });
};

YoshiDancer.prototype.lineup= function(){
  this.$node.animate({
    left: "300"
  });
};