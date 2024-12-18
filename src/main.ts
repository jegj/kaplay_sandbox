import kaplay from "kaplay";

const k = kaplay({
  debug: true,
  global: false,
});
k.loadRoot("./"); // A good idea for Itch.io publishing later
// k.loadSpriteAtlas('sprites/sprites/0x72_DungeonTilesetII_v1.7/0x72_DungeonTilesetII_v1.7/atlas_floor-16x16.png', {
//   "floor": {
//     "x": 16,
//     "y": 64,
//     "width": 48,
//     "height": 48,
//     "sliceX": 3,
//     "sliceY": 3,
//   },
// });
k.loadSprite("floor", "sprites/sprites/0x72_DungeonTilesetII_v1.7/0x72_DungeonTilesetII_v1.7/atlas_floor-16x16.png", {
  sliceX: 7,
  sliceY: 7,
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
    k.sprite("floor"),
    k.pos(k.center()),
    k.anchor("center"),
    k.area(),
    k.body(),
  ]);

  // player.play("idle");


  //   k.add([
  //     k.rect(k.width(), 50),
  //     k.area(),
  //     k.outline(3),
  //     k.pos(0, 650),
  //     k.body({
  //       isStatic: true,
  //     })
  //   ]);
  //
});
k.go("game");
