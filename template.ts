namespace SpriteKind {
    export const Ring = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`door1`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`pit`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ring`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background1`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Shang-Chi`, SpriteKind.Player)
sprites.add_profile(Choice.shang)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.gravity_jump(mySprite)
})