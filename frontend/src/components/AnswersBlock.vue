<script setup>
import { defineProps } from 'vue';

defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="answers">
    <div v-for="(msg) in messages" :key="msg.content">
      <p v-if="msg.role === 'assistant'" class="answers__item">{{ msg.content }}</p>
    </div>
    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader-container {
  display: flex;
  justify-content: center;
  height: 110px;
  width: 100%;
  overflow: hidden;
  align-items: center;
}

/* Loader */
.loader {
  width: 50px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  border-radius: 50%;
  position: relative;
  animation: l11 7s infinite;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: calc(100% + 3px);
  left: calc(50% - 12.5px);
  box-shadow: inherit;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  transform-origin: 50% -28px;
  animation: l11 1.5s infinite;
}
.loader:after {
  animation-delay: -0.75s;
}
@keyframes l11 {
  100% {
    transform: rotate(360deg);
  }
}

.answers {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  padding: 0 15px 230px;
  min-height: 100px;
  max-height: 100vh;
  overflow-y: auto;
  width: 60%;

  &__item {
    margin: 1rem;
    padding: 1rem;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background: rgba(255,255,255,0.1);
  }
}
</style>
