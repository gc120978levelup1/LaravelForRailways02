<template>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="recipient_email">Recipient Email:</label>
        <input type="email" v-model="form.recipient_email" required />
      </div>
      <div>
        <label for="subject">Subject:</label>
        <input type="text" v-model="form.subject" required />
      </div>
      <div>
        <label for="body">Message:</label>
        <textarea v-model="form.body" required></textarea>
      </div>
      <button type="submit">Send Email</button>
      <p v-if="message">{{ message }}</p>
    </form>
  </template>

<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';

  const form = ref({
    recipient_email: '',
    subject: '',
    body: ''
  });
  const message = ref('');

  const sendEmail = async () => {
    try {
      const response = await axios.post('/api/send-email', form.value);
      message.value = response.data.message;
      // Clear form after success
      form.value = { recipient_email: '', subject: '', body: '' };
    } catch (error) {
      console.error("There was an error sending the email!", error);
      message.value = 'Failed to send email.';
    }
  };
  </script>
