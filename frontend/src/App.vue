<script setup>
import {RouterView} from "vue-router";
import {onMounted} from "vue";
onMounted(() => {
  console.log('App.vue mounted');
});
</script>

<template>
  <header class="header">
    <h1>Put your problem in a magic box</h1>
  </header>

  <RouterView/>
</template>

<style lang="scss">

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

.header {
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  font-weight: bold;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
//html {
//  height: 100%;
//  overflow: hidden;
//}

$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
  }
}
#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
  }
}
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
};
</style>


