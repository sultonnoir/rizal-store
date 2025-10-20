import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CustomerReviewsTile() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The shopping experience is incredibly smooth. Fast checkout and amazing product quality!',
      role: 'Verified Buyer',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: "Best e-commerce platform I've used. The customer service is exceptional and delivery is always on time.",
      role: 'Premium Member',
    },
    {
      name: 'Emma Williams',
      rating: 5,
      text: 'Love the variety of products and the secure payment options. Highly recommend!',
      role: 'Regular Customer',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const currentReview = reviews[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative overflow-hidden rounded-3xl bg-card border border-card-border p-6 h-full min-h-[250px] flex flex-col"
      data-testid="card-customer-reviews"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">Customer Love</h3>
        <Quote className="h-8 w-8 text-primary/20" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col justify-between"
        >
          <div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < currentReview.rating
                      ? 'fill-primary text-primary'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              "{currentReview.text}"
            </p>
          </div>

          <div>
            <p className="font-semibold text-foreground">
              {currentReview.name}
            </p>
            {currentReview.role && (
              <p className="text-sm text-muted-foreground">
                {currentReview.role}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-1.5 bg-muted'
            }`}
            data-testid={`review-indicator-${index}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
