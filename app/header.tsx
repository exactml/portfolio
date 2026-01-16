'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Download } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">Eslem Karakaş</span>
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Machine Learning Engineer
        </TextEffect>
      </div>
      <a
        href="/eslem_karakas.pdf"
        download="eslem_karakas.pdf"
        className="group flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        <Download className="h-4 w-4" />
      </a>
    </header>
  )
}
