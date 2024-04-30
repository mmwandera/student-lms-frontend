import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import banner from "../assets/banner.png";

export default function Content() {
  return (
    <div className="relative text-center">
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <h1 className="text-white text-4xl font-bold mb-4">Get ahead, stay ahead</h1>
        <p className="text-white">we help you stay ahead by offering courses that teach the latest skills. With expert instructors and interactive content, </p>
        <p className="text-white">you&apos;ll be equipped to thrive in today&apos;s ever-changing world. Join us and start learning today</p>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-md mt-10">
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input type="text" placeholder="Search for Courses" className="w-full" />
          <Button type="submit">Search</Button>
        </div>
        {/* Add any other elements related to the search bar */}
      </div>
      <img src={banner} alt="" className="w-full h-auto max-h-500" style={{ maxHeight: '500px' }} />
    </div>
  );
}
