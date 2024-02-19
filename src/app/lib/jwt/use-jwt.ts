'use client'

import { SAMPLE_COOKIE_NAME } from '@/lib/constants'
import { getCookie } from 'cookies-next'

export function useJwt() {
  return getCookie(SAMPLE_COOKIE_NAME) ?? ''
}