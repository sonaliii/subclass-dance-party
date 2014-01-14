var SnakeDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="snake"></span>');
  this.setPosition(top, left);
  this.counter = 0;
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
  this.counter++;
};

SnakeDancer.prototype.shrink = function(){
  var shrinking = {
    width: 20,
    height: 20
  };
  this.$node.css(shrinking);
};

SnakeDancer.prototype.grow = function(){
  var growing = {
    width: 140,
    height: 140
  };
  this.$node.css(growing);
};