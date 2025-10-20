import { motion } from 'framer-motion'
import { CheckCircle2, CreditCard, ShoppingCart, Truck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: ShoppingCart,
    label: 'Cart',
    description: 'Review your selected items before purchase.',
  },
  {
    icon: CreditCard,
    label: 'Payment',
    description: 'Securely enter your payment details.',
  },
  {
    icon: Truck,
    label: 'Shipping',
    description: 'Choose your preferred shipping method.',
  },
  {
    icon: CheckCircle2,
    label: 'Complete',
    description: 'Order confirmation and receipt.',
  },
]

export function CheckoutFlowTile() {
  const [activeStep, setActiveStep] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAnimation = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2500)
  }

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startAnimation()
    return () => stopAnimation()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl bg-card border border-card-border p-8 w-full mx-auto h-full"
      data-testid="card-checkout-flow"
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        className="text-3xl font-bold text-foreground mb-10 text-center leading-tight"
      >
        Seamless Checkout
      </motion.h3>

      <div className="grid grid-cols-1 gap-5">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index === activeStep

          return (
            <motion.div
              key={index}
              className="flex items-start gap-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.8,
                ease: 'easeOut',
              }}
              data-testid={`checkout-step-${index}`}
            >
              {/* Icon Circle */}
              <motion.div
                animate={{
                  scale: isActive ? 1.35 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 25,
                  duration: 0.6,
                }}
                className={cn(
                  'size-10 rounded-full flex items-center justify-center border-2 shadow-md flex-shrink-0',
                  {
                    'bg-primary': isActive,
                    'text-white': isActive,
                  },
                )}
              >
                <Icon className="size-4" />
              </motion.div>

              {/* Text Content */}
              <div>
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 3,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="block text-xl font-semibold leading-snug select-none"
                >
                  {step.label}
                </motion.span>
                <motion.p
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    y: isActive ? 0 : 6,
                    color: 'var(--muted-foreground)',
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="mt-2 max-w-xs text-sm leading-relaxed select-text"
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
