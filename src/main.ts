import kaplay from "kaplay";

const k = kaplay({
  debug: true,
  global: false,
});
k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadBean("bean");
k.loadSpriteAtlas('./public/sprites/kenney_pixel-line-platformer/Tilemap/tilemap_packed.png', {
  hero: {
    x: 16,
    y: 16,
    width: 160,
    height: 96,
  }
});
k.setGravity(1600);

k.scene("game", () => {
  // const level = k.addLevel([
  //   // Design the level layout with symbols
  //   "@  ^ $$",
  //   "=======",
  // ], {
  //   // The size of each grid
  //   tileWidth: 64,
  //   tileHeight: 64,
  //   // The position of the top left block
  //   pos: k.vec2(100, 200),
  //   // Define what each symbol means (in components)
  //   tiles: {
  //     "@": () => [
  //       k.sprite("bean"),
  //       k.area(),
  //       k.body(),
  //       k.anchor("bot"),
  //       "player",
  //     ],
  //     "=": () => [
  //       k.sprite("grass"),
  //       k.area(),
  //       k.body({ isStatic: true }),
  //       k.anchor("bot"),
  //     ],
  //     "$": () => [
  //       k.sprite("coin"),
  //       k.area(),
  //       k.anchor("bot"),
  //       "coin",
  //     ],
  //     "^": () => [
  //       k.sprite("spike"),
  //       k.area(),
  //       k.anchor("bot"),
  //       "danger",
  //     ],
  //   },
  // });

  // const rotatingBean = k.add([
  //   k.sprite("bean"),
  //   k.pos(50, 100),
  //   k.area(),
  //   k.anchor("center"),
  //   k.rotate(0),
  //   k.animate(),
  //   k.body()
  // ]);


  //   direction: "forward",
  // });
  //
  k.add([
    k.sprite("hero"),
    k.pos(k.center()),
    k.anchor("center"),
    k.area(),
    k.body(),
  ]);

  // player.play("idle");


  k.add([
    k.rect(k.width(), 50),
    k.area(),
    k.outline(3),
    k.pos(0, 650),
    k.body({
      isStatic: true,
    })
  ]);

});
k.go("game");
