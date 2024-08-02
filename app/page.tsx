"use client"
import React from 'react'
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const getLoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login')
  }, [router])
  return null
}

export default getLoginPage;