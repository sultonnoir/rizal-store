import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureHighlightTileProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureHighlightTile({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureHighlightTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, delay }}
      className="relative overflow-hidden rounded-3xl bg-card border border-card-border p-6 h-full min-h-[180px] hover-elevate"
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
