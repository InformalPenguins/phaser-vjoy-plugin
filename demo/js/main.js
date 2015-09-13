/* global Phaser */

(function (Phaser) {
  'use strict';

  var sprite;
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {

    preload: function preload() {
      game.load.image('player', 'assets/player.png');
      game.load.image('vjoy_base', 'assets/base.png');
      game.load.image('vjoy_body', 'assets/body.png');
      game.load.image('vjoy_cap', 'assets/cap.png');
    },

    create: function create() {
      game.stage.backgroundColor = '#9D6767';

      sprite = game.add.sprite(300, 300, 'player');

      game.vjoy = game.plugins.add(Phaser.Plugin.VJoy);
      game.vjoy.inputEnable();
    },

    update: function update() {
      var cursors = game.vjoy.cursors;

      if (cursors.left) {
        sprite.x--;
      } else if (cursors.right) {
        sprite.x++;
      }

      if (cursors.up) {
        sprite.y--;
      } else if (cursors.down) {
        sprite.y++;
      }
    }
  });

}.call(this, Phaser));
