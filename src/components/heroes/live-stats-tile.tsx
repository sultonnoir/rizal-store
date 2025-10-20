import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { TrendingUp } from 'lucide-react'

interface LiveStatsTileProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  trend?: number
  color?: 'primary' | 'accent' | 'success'
}

export function LiveStatsTile({
  label,
  value,
  suffix = '',
  prefix = '',
  trend,
  color = 'primary',
}: LiveStatsTileProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
    })
    return controls.stop
  }, [value, count])

  const colorClasses = {
    primary: 'from-primary to-primary/80',
    accent: 'from-accent to-accent/80',
    success: 'from-chart-3 to-chart-3/80',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${colorClasses[color]} p-6 h-full min-h-[200px] flex flex-col justify-between`}
      data-testid={`card-stats-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <p className="text-white/80 text-sm font-medium mb-2">{label}</p>
        <div className="flex items-baseline gap-2">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
          </motion.h3>
        </div>
      </div>

      {trend !== undefined && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 flex items-center gap-1 text-white/90"
        >
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+{trend}% this month</span>
        </motion.div>
      )}
    </motion.div>
  )
}
