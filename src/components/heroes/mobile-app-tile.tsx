import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'

interface MobileAppTileProps {
  image: string
}

export function MobileAppTile({ image }: MobileAppTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-muted border border-card-border p-6 h-full min-h-[300px]"
      data-testid="card-mobile-app"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-primary/10">
          <Smartphone className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          Shop on the Go
        </h3>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        Download our mobile app for exclusive deals and seamless shopping
        experience
      </p>

      <div className="flex justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="w-40 h-72 rounded-3xl bg-background border-4 border-foreground/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/10 rounded-b-2xl" />
            <img
              src={image}
              alt="Mobile app"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 blur-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
