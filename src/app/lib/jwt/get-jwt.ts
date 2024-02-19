'use server'

import { SAMPLE_COOKIE_NAME } from '@/lib/constants'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'

export async function getServerJwt() {
  return getCookie(SAMPLE_COOKIE_NAME, { cookies }) ?? ''
}
