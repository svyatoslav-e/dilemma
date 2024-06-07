<script setup>
import {RouterView} from "vue-router";
import {onMounted, ref} from "vue";

const messages = ref([]);
const message = ref({
  role: "user",
  content: ""
});

async function fetchOpenAIResponse() {
  try {
    const res = await fetch(import.meta.env.VITE_OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: messages.value })
    });
    const data = await res.json();
    messages.value.push(data.message);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function handleSubmit() {
  messages.value.push({ ...message.value });
  await fetchOpenAIResponse();
  message.value = { role: "user", content: '' };
}

onMounted(() => {
  // console.log(openai);
});
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>OpenAI Chatbot</h1>
    </div>
  </header>

  <form @submit.prevent>
    <input type="text" placeholder="Type your message here" v-model="message.content">
    <button type="submit" @click="handleSubmit">Send</button>
  </form>

  <div v-for="(msg) in messages" :key="msg.content">
    <p>{{ msg.user }}</p>
    <p>{{ msg.content }}</p>
  </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
