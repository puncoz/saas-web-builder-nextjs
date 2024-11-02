import { FunctionComponent, ReactNode } from "react"

type Props = Readonly<{
  children: ReactNode
}>

const AuthLayout: FunctionComponent<Props> = ({children}) => {
  return (
    <div className="h-full flex items-center justify-center">
      {children}
    </div>
  )
}

export default AuthLayout
