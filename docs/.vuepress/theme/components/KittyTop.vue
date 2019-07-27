<template>
  <div>
    <div class="kitty-top wrapper">
      <div class="kitty-top cat">
        <span class="eyes left"></span>
        <span class="eyes right"></span>
        <span class="mouth"></span>
      </div>

      <div class="moon kitty-top">
        <div class="sphere kitty-top"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.kitty-top {
  display: block;
  position: absolute;
  margin: auto;
  bottom: 0;
  right: 0;
}

.wrapper {
  height: 100px;
  width: 60px;
  margin: auto;
  font-family: "Clicker Script", cursive;
}

.moon {
  height: 60px;
  width: 60px;
  background: #666666;
  border-radius: 30px;
  box-shadow: 0 0 30px 1px #444444;
}

.moon:before {
  border-radius: 30px;
  box-shadow: 5px -25px 0 0 #444, 25px 0 0 0 #444, 25px -18px 0 5px #444;
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  left: 15px;
  bottom: 5px;
  background: #444;
}

.cat {
  background: #ff9955;
  height: 30px;
  top: auto;
  right: 15px;
  bottom: 30px;
  width: 30px;
  z-index: 0;
  -webkit-transition: all linear 0.2s;
}

.cat:before,
.cat:after {
  width: 0;
  height: 0;
  top: -5px;
  position: absolute;
  content: "";
}

.cat:before {
  border-left: 0px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ff9955;
  left: 0;
}

.cat:after {
  border-right: 0px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid #ff9955;
  right: 0;
}

.cat .eyes {
  position: absolute;
  height: 4px;
  width: 4px;
  background: #333;
  border-radius: 100%;
  top: 8px;
}

.cat .eyes.left {
  left: 6px;
}
.cat .eyes.right {
  right: 6px;
}

.cat .mouth {
  position: absolute;
  height: 2px;
  width: 60%;
  background: #333;
  border-radius: 0 0 30% 30%;
  top: 14px;
  margin: auto;
  left: 0;
  right: 0;
}

.wrapper:hover .cat {
  bottom: 50px;
}
</style>
