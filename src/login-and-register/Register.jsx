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

export default function Register() {
    return (
      <div className="h-screen flex items-center justify-center">

        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Enter your credentials to register to the site.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email address</Label>
                  <Input id="email-address" placeholder="Enter Email address" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">New Password</Label>
                  <Input id="new-password" placeholder="Enter New Password" type="password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Confirm Password</Label>
                  <Input id="confirm-password" placeholder="Confirm Password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
          </CardFooter>
        </Card>

      </div>
    )
  }
