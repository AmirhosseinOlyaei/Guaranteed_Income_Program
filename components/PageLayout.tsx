import Sidebar from "./Sidebar"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-8">
        <Sidebar />
        <div className={cn("flex-1 min-w-0", className)}>{children}</div>
      </div>
    </div>
  )
}
