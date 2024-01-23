'use client'

import React from 'react'
import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'

const CreatePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter()

  if(!isSignedIn) return router.push('/sign-up')
  return (
    <div>CreatePage</div>
  )
}

export default CreatePage