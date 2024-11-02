import { uploadThingFileRouter } from "@/app/api/uploadthing/core"
import ThemeProvider from "@/providers/theme-provider"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "@/assets/css/app.css"
import type { FC, ReactNode } from "react"
import { extractRouterConfig } from "uploadthing/server"

const font = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Haami.dev",
  description: "All in one developer's solutions",
}

type Props = Readonly<{
  children: ReactNode;
}>

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className="" suppressHydrationWarning>
    <body className={`${font.className} antialiased`}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NextSSRPlugin routerConfig={extractRouterConfig(uploadThingFileRouter)}/>
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}

export default RootLayout
