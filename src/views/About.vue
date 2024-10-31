<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Arsen Mazmanyan</strong> <i>(The Birdman)</i>, an HTML5 Game Developer who likes challenges.<br />
        My main goal in my career is to provide good gaming experience to those who play the games I make.
      </div>

      <div style="margin-top: 20px;">
        I've experience in making <strong>Playable Ads, HTML5 games, and other interactive content.</strong> My playable
        ads are compatible with
        <strong>Google, Facebook, IronSource, Unity, Vungle, Mintergral and other ad networks.</strong>
      </div>

      <div style="margin-top: 40px;">
        I also make HTML5 games for <strong>web, mobile, and desktop</strong> platforms. I use
        <strong>Phaser 3, PixiJS, ThreeJS, and other frameworks</strong> to make games. With my math knowledge I can
        implement some basic physics in games, like <strong>gravity, collisions, and movements.</strong>
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>

