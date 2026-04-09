"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import NavLinks from "./NavLinks"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`hidden lg:flex flex-col shrink-0 transition-all duration-300 ${
        collapsed ? "w-12" : "w-64"
      }`}
    >
      <div className="sticky top-20 bg-surface rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b border-border">
          {!collapsed && (
            <span className="text-xs font-semibold text-muted uppercase tracking-wider px-1">
              Guide
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ms-auto p-1.5 rounded-lg hover:bg-background text-muted hover:text-text transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                collapsed ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
        {!collapsed && (
          <div className="p-3">
            <NavLinks variant="sidebar" />
          </div>
        )}
      </div>
    </aside>
  )
}
