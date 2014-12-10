(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);

      AudioHandler.init();
      AudioHandler.onUseSample();
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;

      var audio = AudioHandler.update();

      if (audio){
        x = this.input.position.x;
        y = this.input.position.y;

        x = audio.level * 2000;
        y = audio.level * 2000;

        // console.log(x);
        // console.log(y);

        cx = this.world.centerX;
        cy = this.world.centerY;

        //angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
        //this.player.angle = angle;

        dx = x - cx;
        dy = y - cy;
        scale = Math.sqrt(dx * dx + dy * dy) / 100;


        this.player.scale.x = scale * 0.6;
        this.player.scale.y = scale * 0.6;
      }

    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['groove'] = window['groove'] || {};
  window['groove'].Game = Game;

}());
