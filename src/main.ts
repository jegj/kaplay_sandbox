import kaplay from "kaplay";

const k = kaplay({
  debug: true,
  global: false,
});
k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSpriteAtlas("sprites/0x72_DungeonTilesetII_v1.7/0x72_DungeonTilesetII_v1.7/atlas.png", {
  "ork": {
    x: 368,
    y: 374,
    width: 16,
    height: 20,
    sliceX: 8,
  }
});
k.setGravity(1600);

k.scene("game", () => {
  k.add([
    k.sprite("ork"),
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
