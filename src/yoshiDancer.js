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
  var yoshiPxLeft = this.$node.css('left');
  var yoshiPxTop = this.$node.css('top');
  var yoshiLeft = Math.floor(JSON.stringify(yoshiPxLeft).substring(1,5));
  var yoshiTop = Math.floor(JSON.stringify(yoshiPxTop).substring(1,5));
  for(var i = 0 ; i<window.coinLocations.length; i++){
   if(Math.abs(yoshiLeft - window.coinLocations[i][1]) < 100 && Math.abs(yoshiTop - window.coinLocations[i][0]) < 150){
     window.coinLocations[i][2].$node.toggle();
     window.coinLocations.splice(i,1);

      // this.$node.animate({  textIndent: '+=1' }, {
      //     step: function() {
      //       $(this).css('-webkit-transform','rotate('+360+'deg)'); 
      //     },
      //     duration:50
      // },'linear');

    }
    }
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