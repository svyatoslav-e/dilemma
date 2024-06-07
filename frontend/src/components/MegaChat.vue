<script setup>
import ChatForm from "@/components/ChatForm.vue";
import AnswersBlock from "@/components/AnswersBlock.vue";

import useApi from "@/helpers/api";

const { messages, isLoading, fetchMessages } = useApi();

async function handleSubmitMessage(message) {
  messages.value.push({role: "user", content: message});
  await fetchMessages();
}
</script>

<template>
  <ChatForm @submit="handleSubmitMessage" />
  <AnswersBlock :messages="messages" :isLoading="isLoading" />
</template>

<style scoped lang="scss">

</style>
