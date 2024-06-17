<script setup>
import { useRoute, useRouter } from 'vue-router';
import models from "../../data/models.js";

import ModelQuestions from "@/components/ModelQuestions.vue";

const router = useRouter();
const route = useRoute();

const model = models.find(model => model.id === route.params.id);

console.log('Model.vue mounted', model);
</script>

<template>
  <h2>{{ model.title }}</h2>
  <p>{{ model.description }}</p>
  <ModelQuestions :questions="model.questions" />
</template>

<style scoped lang="scss">

</style>
