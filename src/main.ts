import kaplay from "kaplay";

const k = kaplay({
  debug: true,
  global: false,
});
k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadBean("bean");
k.setGravity(1600);

k.scene("game", () => {
  const rotatingBean = k.add([
    k.sprite("bean"),
    k.pos(50, 100),
    k.area(),
    k.anchor("center"),
    k.rotate(0),
    k.animate(),
    k.body()
  ]);

  rotatingBean.animate("angle", [0, 360], {
    duration: 2,
    direction: "forward",
  });

  // const movingBean = k.add([
  //   k.sprite("bean"),
  //   k.pos(150, 100),
  //   k.area(),
  //   k.anchor("center"),
  //   k.animate(),
  //   k.body()
  // ]);
  //
  // // This will animate the bean from left to right in 2 seconds
  // // The direction "ping-pong" means that when it goes to the right, it will move back to the left
  // movingBean.animate("pos", [k.vec2(150, 100), k.vec2(200, 100)], {
  //   duration: 2,
  //   direction: "ping-pong",
  // });
  k.add([
    k.rect(k.width(), 50),
    k.area(),
    k.outline(3),
    k.pos(0, 150),
    k.body({
      isStatic: true,
    })
  ]);
  k.onKeyPress("space", () => {
    // .isGrounded() is provided by body()
    if (rotatingBean.isGrounded()) {
      // .jump() is provided by body()
      rotatingBean.jump();
    }
  });

  rotatingBean.onGround(() => {
    k.debug.log("ouch");
  });


});
k.go("game");
