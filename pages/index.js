'use client';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavigationHeader from '../components/Header/NavigationHeader'
import Editor from '../components/Editor'
import React from 'react'
import Sidebar from '../components/Header/Sidebar';
import options from '../config/menuBtns.json'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [sidebarState, setSidebarState] = React.useState(false)

  return (
    <>
      <Head>
        <title>Lex-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div class="d-flex flex-row mb-3" style={{ height: 100+'vh' }}>
          { !sidebarState && <Sidebar options={options} />  }
          
          <div class="flex-grow-1 bg-white">
            <NavigationHeader sidebarState={sidebarState} setSidebarState={setSidebarState} />
            <Editor />
          </div>
        </div>
    </>
  )
}
