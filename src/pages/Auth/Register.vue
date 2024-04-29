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
          type="url"
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
import { IAuthTokens, IRegisterPayload } from '@/types/auth.ts'
import { catchError } from '@/utils/catch-error.ts'
import { useAuthStore } from '@/store/auth.ts'
import { useRouter } from 'vue-router'

const $api = useApi()
const $router = useRouter()
const authStore = useAuthStore()

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
    const res = await $api.$post<IAuthTokens, IRegisterPayload>('/api/auth/register', form)
    authStore.setTokens(res.data, true)
    alert('Register successfully!')
    $router.push({
      name: 'Profile'
    })
  } catch (err) {
   catchError(err)
  } finally {
    loading.value = false
  }
}
</script>
