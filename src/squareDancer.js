var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="square"></span>');
  this.setPosition(top, left);
  this.counter = 0;
  window.dancers.push(this);

};

SquareDancer.prototype = Object.create(Dancer.prototype);
//BlinkyDancer.prototype.constructor = BlinkyDancer;

SquareDancer.prototype.step = function(){
  //this.$node.css(styleSettings[top]++);
  //this.$node.css(styleSettings[left]++);
  Dancer.prototype.step.apply(this);
  //this.$node.toggle();
  if (this.counter % 2 === 0) {
    this.shrink();
  } else {
    this.grow();
  }
  this.counter++;
};

SquareDancer.prototype.shrink = function(){
  var shrinking = {
    width: 20,
    height: 20
  };
  this.$node.css(shrinking);
};

SquareDancer.prototype.grow = function(){
  var growing = {
    width: 140,
    height: 140
  };
  this.$node.css(growing);
};

SquareDancer.prototype.lineup = function(){
  this.$node.animate({
    left: "200"
  });
};