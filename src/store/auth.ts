import { defineStore } from 'pinia'
import { IAuthTokens } from '@/types/auth.ts'

export const useAuthStore = defineStore("auth", {
  state: () => ({
    tokens: {
      access: null as string | null,
      refresh: null as string | null,
    }
  }),
  getters: {
    getTokens: (state) => state.tokens,
  },
  actions: {
    setTokens(payload: IAuthTokens, save?: boolean){
      this.tokens.access = payload.accessToken
      this.tokens.refresh = payload.refreshToken

      if(save){
        localStorage.setItem('access-token', payload.accessToken)
        localStorage.setItem('refresh-token', payload.refreshToken)
      }
    }
  }
})