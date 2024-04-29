<template>
  <div class="flex flex-col gap-3">
    <h2 class="text-center text-lg font-medium uppercase">Register</h2>
    <form class="flex flex-col gap-3" @submit.prevent="submit">
      <label for="fullName">
        <span class="mb-2 inline-block font-medium">Full Name</span>
        <input
          :readonly="loading"
          type="text"
          placeholder="John Doe"
          id="fullName"
          required
          v-model="form.fullName"
        />
      </label>
      <label for="username">
        <span class="mb-2 inline-block font-medium">Username</span>
        <input
          :readonly="loading"
          type="text"
          placeholder="johndoe"
          id="username"
          required
          v-model="form.username"
        />
      </label>
      <label for="password">
        <span class="mb-2 inline-block font-medium">Password</span>
        <input
          :readonly="loading"
          type="password"
          id="password"
          required
          v-model="form.password"
        />
      </label>
      <label for="website">
        <span class="mb-2 inline-block font-medium">Website</span>
        <input
          :readonly="loading"
          type="text"
          id="website"
          v-model="form.website"
        />
      </label>
      <label for="about">
        <span class="mb-2 inline-block font-medium">About</span>
        <textarea
          :readonly="loading"
          type="text"
          id="about"
          v-model="form.about"
        />
      </label>
      <button :disabled="loading" type="submit">
        {{ loading ? 'Loading...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { IRegisterPayload } from '@/types/auth.ts'

const $api = useApi()

const form = reactive<IRegisterPayload>({
  fullName: '',
  username: '',
  password: '',
  website: null,
  about: null,
})

const loading = ref(false)
async function submit() {
  try {
    loading.value = true
  } catch (err) {
    console.log(err)
    console.log(err.response)
  } finally {
    loading.value = false
  }
}
</script>
