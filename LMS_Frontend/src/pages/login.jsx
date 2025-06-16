import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  })

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  }

  const handleRegisteration = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput
    console.log(inputData)
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="signup" className="w-full">Signup</TabsTrigger>
            <TabsTrigger value="login" className="w-full">Login</TabsTrigger>
          </TabsList>

          {/* Signup Form */}
          <TabsContent value="signup">
            <Card>
              <form onSubmit={(e) => { e.preventDefault(); handleRegisteration("signup"); }}>
                <CardHeader>
                  <CardTitle>Signup</CardTitle>
                  <CardDescription>Create a new account</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-name">Name</Label>
                    <Input
                      id="tabs-demo-name"
                      name="name"
                      value={signupInput.name}
                      onChange={(e) => changeInputHandler(e, "signup")}
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-email">Email</Label>
                    <Input
                      id="tabs-demo-email"
                      name="email"
                      value={signupInput.email}
                      onChange={(e) => changeInputHandler(e, "signup")}
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-password">Password</Label>
                    <Input
                      id="tabs-demo-password"
                      name="password"
                      value={signupInput.password}
                      onChange={(e) => changeInputHandler(e, "signup")}
                      type="password"
                      placeholder="Create a password"
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Signup</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Login Form */}
          <TabsContent value="login">
            <Card>
              <form onSubmit={(e) => { e.preventDefault(); handleRegisteration("login"); }}>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Login into your account</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  {/* Dummy fields to suppress browser autofill */}
                  <input type="text" name="fakeusernameremembered" style={{ display: "none" }} />
                  <input type="password" name="fakepasswordremembered" style={{ display: "none" }} />

                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-email-login">Email</Label>
                    <Input
                      id="tabs-demo-email-login"
                      name="email"
                      value={loginInput.email}
                      onChange={(e) => changeInputHandler(e, "login")}
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-password-login">Password</Label>
                    <Input
                      id="tabs-demo-password-login"
                      name="password"
                      value={loginInput.password}
                      onChange={(e) => changeInputHandler(e, "login")}
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Login</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}

export default login

