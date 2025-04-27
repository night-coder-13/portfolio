<script setup>
import { ref } from 'vue';
import axios from 'axios';


const users = ref([]);
const error = ref(null);

const fetchUsers = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/works',
      {
        title: "test",
        text: "test text",
      },
      {
        headers: {
          'Authorization': 'Bearer 1|gGFnwfbFqGPzlSSBFuXIPbEpdZNTNrSt9bBE14kAae01a2d6',
          'Content-Type': 'application/json',
        }
      }
    );
    users.value = response.data;
  } catch (err) {
    error.value = err.message;
  }
};

// فراخوانی تابع هنگام بارگذاری کامپوننت
onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="p-8">
    <h1>کاربران</h1>
    <div v-if="error">{{ error }}</div>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.title }}</li>
    </ul>
  </div>
</template>
