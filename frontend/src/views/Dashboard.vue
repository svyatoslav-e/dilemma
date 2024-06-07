<script setup>
import MegaChat from "@/components/MegaChat.vue";

const MODELS = [
  {
    id: "text-davinci-002",
    name: "Partner",
    description: "Generate a partner for a given person."
  },
  {
    id: "text-davinci-003",
    name: "Startup",
    description: "Generate a startup idea."
  },
];


</script>

<template>
  <div class="dashboard">
   <div class="dashboard__section">
     <h2>Try predefined models</h2>
     <div class="models">
       <div v-for="model in MODELS" class="models__item" :key="model.id">
         <h3>{{ model.name }}</h3>
         <p>{{ model.description }}</p>
       </div>
     </div>
   </div>
    <div class="dashboard__section"></div>
    <div class="dashboard__section chat">
      <h2>Chat with mega brain</h2>
      <MegaChat/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 15px 30px;
  gap: 20px;

  &__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.models {
  display: flex;
  gap: 20px;

  &__item {
    display: flex;
    width: 200px;
    height: 200px;
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
    cursor: pointer;
  }
}


</style>
