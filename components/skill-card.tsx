import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  name: string
  icon: string
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <Card className="glass glass-hover border-0 rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="relative w-12 h-12 mb-4">
          <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium">{name}</h3>
      </CardContent>
    </Card>
  )
}
