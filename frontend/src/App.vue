<script setup>
import {RouterView} from "vue-router";
import {onMounted, ref} from "vue";

const messages = ref([]);
const isLoading = ref(false);
const message = ref({
  role: "user",
  content: ""
});

async function fetchOpenAIResponse() {
  try {
    isLoading.value = true;
    const res = await fetch(import.meta.env.VITE_OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({messages: messages.value})
    });
    const data = await res.json();
    isLoading.value = false;
    messages.value.push(data.message);
  } catch (error) {
    isLoading.value = false;
    console.error('Error:', error);
  }
}

async function handleSubmit() {
  messages.value.push({...message.value});
  message.value = {role: "user", content: ''};
  await fetchOpenAIResponse();
}

onMounted(() => {
  // console.log(openai);
});
</script>

<template>
  <header class="header">
    <h1>Put your problem in a magic box</h1>
  </header>

  <form @submit.prevent class="form">
    <div class="form-group">
      <input type="text" placeholder="What do you want to know?" v-model="message.content" class="form-group__input">
    </div>
    <div class="form-group">
      <button @click="handleSubmit" class="form-group__button" hidden>Let magic work...</button>
    </div>
  </form>

  <div class="answers">
    <div v-for="(msg) in messages" :key="msg.content">
      <p v-if="msg.role === 'assistant'" class="answers__item">{{ msg.content }}</p>
    </div>
    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
  </div>

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

.header {
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  font-weight: bold;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.form {
  display: flex;
  width: 60%;
  justify-content: center;
  flex-direction: column;
}

.form-group {
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  padding: 2px 30px;

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

.loader-container {
  display: flex;
  justify-content: center;
  height: 110px;
  width: 100%;
  overflow: hidden;
  align-items: center;
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


@function multiple-box-shadow ($n) {
  $value: '#{random(2000)}px #{random(20000)}px #FFF';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
  }

  @return unquote($value);
}
$shadows-small: multiple-box-shadow(700);
$shadows-medium: multiple-box-shadow(200);
$shadows-big: multiple-box-shadow(100);

html {
  height: 100%;
  overflow: hidden;
}
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
#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $shadows-big;
  animation: animStar 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
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

</style>


