var game = new Phaser.Game(600, 320, Phaser.AUTO);

var GameState = {
  preload: function() {
    this.load.image('background', 'assets/images/house-bg.jpg');
    this.load.image('coin', 'assets/images/coin.png');
    this.load.image('person', 'assets/images/property-agent.png');
  },

  create: function() {
    this.setResponsive();

    // The game background
    this.background = this.game.add.sprite(0, 0, 'background');

    // Coins!
    this.coin = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'coin');
    this.coin.anchor.setTo(0.5, 0.5);
    this.coin.scale.setTo(2);

    // Agent
    this.person = this.game.add.sprite(120, 10, 'person');
    this.person.scale.setTo(0.6);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  },

  update: function() {
    //  This allows us to move the game camera using the keyboard

    if (this.cursors.left.isDown) {
        this.person.anchor.setTo(0.8, 0.4);
        this.person.scale.setTo(0.2);
    } else {
        this.resetPerson();
    }

    if (this.cursors.right.isDown) {
        this.person.scale.setTo(0.5);
        this.person.anchor.x = -1;
    } else {
        this.resetPerson();
    }

    if (this.cursors.up.isDown) {
        this.person.scale.setTo(0.6);
    } else {
      this.resetPerson();
    }

    if (this.cursors.down.isDown) {
      this.coin.scale.x = -1;
        this.person.scale.setTo(0.5);
    } else {
        this.resetPerson();
        this.resetCoin();
    }
  },

  resetPerson: function() {
    this.person.scale.setTo(0.6);
    this.person.anchor.setTo(0);
  },

  resetCoin: function() {
     this.coin.scale.x = 1;
  },

  setResponsive: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },
};

game.state.add('GameState', GameState);
game.state.start('GameState');
