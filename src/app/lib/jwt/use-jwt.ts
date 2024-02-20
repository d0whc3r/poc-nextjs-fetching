import { SAMPLE_COOKIE_NAME } from '@/lib/constants'
import { getCookie } from 'cookies-next'

export function xJwt() {
  return getCookie(SAMPLE_COOKIE_NAME) ?? ''
}