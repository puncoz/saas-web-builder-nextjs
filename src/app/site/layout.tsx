import SiteNavigation from "@/components/site/navigation"
import { ClerkProvider } from "@clerk/nextjs"
import { dark as darkTheme } from "@clerk/themes"
import { FunctionComponent, ReactNode } from "react"

type Props = Readonly<{
  children: ReactNode
}>
const SiteLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: darkTheme }}>
      <main className="h-full">
        <SiteNavigation/>
        {children}
      </main>
    </ClerkProvider>
  )
}

export default SiteLayout
