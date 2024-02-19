import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SAMPLE_COOKIE_NAME } from './lib/constants'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.cookies.set(SAMPLE_COOKIE_NAME, 'sample-cookie-content')

  return response
}
