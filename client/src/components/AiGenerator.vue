<script>
import axios from "axios";

export default {
  data() {
    return {
      prompt: "",
      response: null,
    };
  },
  methods: {
    async generateContent() {
      try {
        const res = await axios.post("http://localhost:5001/api/generate", {
          prompt: this.prompt,
        });
        this.response = res.data.response;
      } catch (error) {
        console.error("Error generating content:", error);
      }
    },
  },
};
</script>

<template>
  <div class="grid gap-y-6">
    <h1>AI Story For Children Generator</h1>
    <textarea
      v-model="prompt"
      placeholder="Enter the theme here..."
      class="w-full h-28 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-700 placeholder-gray-400"
    ></textarea>
    <div>
      <button
        class="text-white p-2 w-1/2 bg-indigo-500"
        @click="generateContent"
      >
        Generate
      </button>
    </div>
    <div v-if="response">
      <h2>Generated Content:</h2>
      <span class="result" v-html="response"></span>
    </div>
  </div>
</template>

<style scoped>
.result {
  padding: 1rem;
}
</style>
