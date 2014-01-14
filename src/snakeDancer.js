var SnakeDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="snake"></span>');
  this.setPosition(top, left);
};

SnakeDancer.prototype = Object.create(Dancer.prototype);
//BlinkyDancer.prototype.constructor = BlinkyDancer;

SnakeDancer.prototype.step = function(){
  //this.$node.css(styleSettings[top]++);
  //this.$node.css(styleSettings[left]++);
  Dancer.prototype.step.apply(this);
  //this.$node.toggle();
  // if (this.counter % 2 === 0) {
  //   this.shrink();
  // } else {
  //   this.grow();
  // }
  this.move();
};

SnakeDancer.prototype.move = function(){
  this.$node.animate({
    top: '-=25'
  });
};