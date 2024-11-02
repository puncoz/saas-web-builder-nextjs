import { ClerkProvider } from "@clerk/nextjs"
import { dark as darkTheme } from "@clerk/themes"
import { FunctionComponent, ReactNode } from "react"

type Props = Readonly<{
  children: ReactNode
}>
const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: darkTheme }}>
      {children}
    </ClerkProvider>
  )
}

export default MainLayout
