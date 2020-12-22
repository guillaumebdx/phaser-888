class the888 extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('balls', 'assets/sprites/balls32x24x5.png', { frameWidth: 32, frameHeight: 24 });
    }

    create ()
    {
        const group = this.add.group({
            key: 'balls',
            frame: [
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),
                getRandomInt(4),

            ],
        });

        Phaser.Actions.GridAlign(group.getChildren(), {
            width: 5,
            height: 5,
            cellWidth: 32,
            cellHeight: 32,
            x: 32,
            y: 32
        });

        let prevNumber = 0;
        for (let i=0; i< group.getChildren().length; i++) {
            let ball = group.getChildren()[i];
            ball.setInteractive();
            ball.on('pointerdown', function (pointer) {
                let number = ball.frame.name +1;
                if (number === prevNumber || prevNumber === 0) {
                    ball.tint = 0x000000;
                    prevNumber = number;
                }
            });
        }

    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: [ the888 ]
};

const game = new Phaser.Game(config);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
