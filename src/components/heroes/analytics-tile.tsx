import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'

export function AnalyticsTile() {
  const data = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 78 },
    { label: 'Wed', value: 52 },
    { label: 'Thu', value: 88 },
    { label: 'Fri', value: 95 },
    { label: 'Sat', value: 72 },
    { label: 'Sun', value: 68 },
  ]

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-card border border-card-border p-6 h-full min-h-[250px]"
      data-testid="card-analytics"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-accent/10">
            <BarChart3 className="h-5 w-5 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Sales Analytics
          </h3>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          This Week
        </span>
      </div>

      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 100}%` }}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.1,
                ease: 'easeOut',
              }}
              className="w-full bg-gradient-to-t from-accent to-accent/60 rounded-t-lg min-h-[20%]"
              data-testid={`analytics-bar-${index}`}
            />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
