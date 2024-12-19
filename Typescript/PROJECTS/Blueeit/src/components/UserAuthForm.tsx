"use client"
import { FC, useState } from "react"
import { Button } from "./ui/Button"
import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import { Icons } from "./ui/Icons"
import { toast } from "@/hooks/use-toast"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn("google")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button onClick={loginWithGoogle} isLoading={isLoading} className="w-full">
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
      </Button>
    </div>
  )
}

export default UserAuthForm
