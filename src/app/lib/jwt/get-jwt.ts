'use server'

import { SAMPLE_COOKIE_NAME } from '@/lib/constants'
import { getCookie } from 'cookies-next'
import { cookies,headers } from 'next/headers'

export async function getServerJwt() {
  return headers().get(SAMPLE_COOKIE_NAME) ?? ''
}
