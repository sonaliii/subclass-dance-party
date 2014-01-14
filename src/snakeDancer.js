var SnakeDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="snake"></span>');
  this.setPosition(top, left);
  window.dancers.push(this);
};

SnakeDancer.prototype = Object.create(Dancer.prototype);
//BlinkyDancer.prototype.constructor = BlinkyDancer;

SnakeDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this);
  this.move();
};

SnakeDancer.prototype.move = function(){
  this.$node.animate({
    top: '-=25'
  });
};

SnakeDancer.prototype.lineup= function(){
  this.$node.animate({
    left: "300"
  });
};