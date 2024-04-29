export interface IRegisterPayload {
  fullName: string
  username: string
  password: string
  website?: string | null
  about?: string | null
}

export interface IAuthTokens{
  accessToken: string
  refreshToken: string
}
