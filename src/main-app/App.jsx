import Content from "./Content"
import Sidebar from "./Sidebar"
import "./app.css"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableDemo() {
  return (
    <div className="h-screen">
      
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] rounded-lg border w-full"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <Sidebar/>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <Content/>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>

    </div>

  )
}

