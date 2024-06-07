<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit']);

const messageContent = ref('');

function handleSubmit() {
  emit('submit', messageContent);
}
</script>

<template>
  <form @submit.prevent class="form">
    <div class="form-group">
      <input type="text" placeholder="What do you want to know?" v-model="messageContent" class="form-group__input">
    </div>
    <div class="form-group">
      <button @click="handleSubmit" class="form-group__button" hidden>Let magic work...</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form-group {
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  padding: 2px 0;

  &__input {
    height: 70px;
    width: 100%;
    line-height: 70px;
    border: none;
    outline: none;
    background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 3px, transparent 3px) 0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 3px, transparent 3px) 100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 3px, transparent 3px) 0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 3px, transparent 3px) 100% 100%/8px 8px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 10px) calc(100% - 16px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 16px) calc(100% - 10px) no-repeat,
    radial-gradient(at 100% 0%, #7e00ff 0%, transparent 93%),
    radial-gradient(at 0% 0%, #ec00ff 20%, transparent 74%),
    radial-gradient(at 100% 100%, #f48200 0%, transparent 70%),
    linear-gradient(187deg, #4d00ff 0%, rgba(118, 0, 196, 1) 20%, rgba(255, 0, 0, 1) 86%, #ff0000 90%);
    border-radius: 8px;
    padding: 2px 30px;
    box-sizing: border-box;
  }

  &__button {
    width: 300px;
    height: 100px;
    font-size: 30px;
    text-align: center;
    line-height: 100px;
    color: rgba(255,255,255,0.9);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: linear-gradient(-45deg, #b13dff, #3d6eff, #338aff, #3cf0c5);
    background-size: 300%;
    -webkit-animation: anime 30s linear infinite;
    animation: anime 30s linear infinite;
  }
}

@function multiple-box-shadow ($n) {
  $value: '#{random(2000)}px #{random(20000)}px #FFF';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
  }

  @return unquote($value);
}

@keyframes anime {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
