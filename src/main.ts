import kaplay from "kaplay";

const k = kaplay({
  debug: true,
  global: false,
  scale: 4
});

const JUMP_FORCE = 480;
const SPEED = 120;

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSpriteAtlas("sprites/dungeon/atlas.png", {
  "princess": {
    x: 128,
    y: 4,
    width: 144,
    height: 28,
    sliceX: 9,
    anims: {
      idle: {
        from: 0,
        to: 1,
        speed: 6,
        loop: true
      },
      run: {
        from: 2,
        to: 7,
        speed: 6,
        loop: true
      },
      jump: 8
    }
  }
});
k.setGravity(1600);

k.scene("game", () => {
  const player = k.add([
    k.sprite("princess"),
    k.pos(k.center()),
    k.anchor("center"),
    k.area(),
    k.body(),
  ]);

  player.play("idle");
  k.add([
    k.rect(k.width(), 24),
    k.area(),
    k.outline(1),
    k.pos(0, k.height() - 24),
    k.body({ isStatic: true }),
  ]);

  k.onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(JUMP_FORCE);
      player.play("jump");
    }
  });

  k.onKeyDown("left", () => {
    player.move(-SPEED, 0);
    player.flipX = true;
    // .play() will reset to the first frame of the anim, so we want to make sure it only runs when the current animation is not "run"
    if (player.isGrounded() && player.getCurAnim().name !== "run") {
      player.play("run");
    }
  });

  k.onKeyDown("right", () => {
    player.move(SPEED, 0);
    player.flipX = false;
    if (player.isGrounded() && player.getCurAnim().name !== "run") {
      player.play("run");
    }
  });
  ["left", "right"].forEach((key) => {
    k.onKeyRelease(key, () => {
      // Only reset to "idle" if player is not holding any of these keys
      if (player.isGrounded() && !k.isKeyDown("left") && !k.isKeyDown("right")) {
        player.play("idle");
      }
    });
  });

  player.onGround(() => {
    if (!k.isKeyDown("left") && !k.isKeyDown("right")) {
      player.play("idle");
    }
    else {
      player.play("run");
    }
  });
});
k.go("game");
