<script setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
  questions: Array,
  default: () => [],
});

const questionsLength = computed(() => props.questions.length);

const currentQuestionIndex = ref(0);

const currentQuestion = computed(() => {
  return props.questions[currentQuestionIndex.value];
});
</script>

<template>
  <div class="model__questions">
    <h2>{{ currentQuestionIndex +1 }} of {{ questionsLength }} questions</h2>
    <div class="model__questions__question">
      <h3>{{ currentQuestion.text }}</h3>
      <p v-for="option in currentQuestion.options" :key="option.id">{{ option.label }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
