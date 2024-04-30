import { Button } from "@/components/ui/button"
import { Contact, Home, Info, LayoutDashboard, LibraryBig, Search } from "lucide-react"
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    
    <div className="flex justify-between p-20 border-2 border-gray-200">
      <div>
        {/* logo */}
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Button variant="ghost">
          <Home className="mr-2 h-4 w-4" /> Home
        </Button>
        <Button variant="ghost">
          <LibraryBig className="mr-2 h-4 w-4" /> My Courses
        </Button>
        <Button variant="ghost">
          <Search className="mr-2 h-4 w-4" /> Explore
        </Button>
        <Button variant="ghost">
          <Info className="mr-2 h-4 w-4" /> About Us
        </Button>
        <Button variant="ghost">
          <Contact className="mr-2 h-4 w-4" /> Contact Us
        </Button>
        <Button variant="ghost">
          <LayoutDashboard className="mr-2 h-4 w-4" /> Teacher&apos;s Portal
        </Button>
      </div>
      <div className="border-l-2 pl-2">
        <Button className="mr-2">
          Login
        </Button>
        <Button >
          Register
        </Button>
      </div>
    </div>
  )
}
