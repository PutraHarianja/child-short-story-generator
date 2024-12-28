<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const prompt = ref("");
    const response = ref(null);
    const isLoadResponse = ref(false);

    const generateContent = async () => {
      response.value = null;
      isLoadResponse.value = true;
      try {
        const res = await axios.post("http://localhost:5001/api/generate", {
          prompt: prompt.value,
        });
        response.value = res.data.response;
      } catch (error) {
        console.error("Error generating content:", error);
      }
      isLoadResponse.value = false;
    };

    return {
      prompt,
      response,
      generateContent,
      isLoadResponse,
    };
  },
};
</script>

<template>
  <div class="grid gap-y-6 max-w-screen-md">
    <h1 class="text-gray-700 font-semibold">AI Children Story Generator</h1>
    <textarea
      v-model="prompt"
      placeholder="Enter the theme here...(about...)"
      class="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-700 placeholder-gray-400"
    ></textarea>
    <div>
      <button
        class="text-white p-3 w-1/2 bg-indigo-500"
        @click="generateContent"
      >
        Generate
      </button>
    </div>
    <div v-if="isLoadResponse">
      <span>
        <img
          class="aspect-square h-48 m-auto"
          src="../assets/rotate.gif"
          alt="Loading GIF"
        />
      </span>
    </div>
    <div v-if="response">
      <span
        class="result p-4 text-gray-700 grid gap-4 bg-gray-50/50"
        v-html="response"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.result :deep(h1) {
  font-size: xx-large;
  font-weight: 500;
}
</style>
