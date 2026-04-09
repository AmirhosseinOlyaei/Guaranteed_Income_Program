import { cn } from "@/lib/utils"
import { ShieldCheck, Lightbulb, Heart, AlertCircle } from "lucide-react"

type CalloutVariant = "immigration" | "cultural" | "trust" | "info"

const variants: Record<
  CalloutVariant,
  { bg: string; border: string; icon: React.ReactNode; labelColor: string }
> = {
  immigration: {
    bg: "bg-info-muted",
    border: "border-info",
    labelColor: "text-info",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  cultural: {
    bg: "bg-accent-muted",
    border: "border-accent",
    labelColor: "text-accent",
    icon: <Lightbulb className="w-4 h-4" />,
  },
  trust: {
    bg: "bg-success-muted",
    border: "border-success",
    labelColor: "text-success",
    icon: <Heart className="w-4 h-4" />,
  },
  info: {
    bg: "bg-border",
    border: "border-muted",
    labelColor: "text-muted",
    icon: <AlertCircle className="w-4 h-4" />,
  },
}

interface CalloutBoxProps {
  variant: CalloutVariant
  label: string
  children: React.ReactNode
  className?: string
}

export default function CalloutBox({
  variant,
  label,
  children,
  className,
}: CalloutBoxProps) {
  const v = variants[variant]
  return (
    <div
      className={cn(
        "rounded-xl border-s-4 p-5 my-6",
        v.bg,
        v.border,
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 font-semibold mb-2 text-sm",
          v.labelColor,
        )}
      >
        {v.icon}
        <span>{label}</span>
      </div>
      <div className="text-text/80 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}
