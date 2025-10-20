import { Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'

function getSeason(month: number): 'summer' | 'fall' | 'winter' | 'spring' {
  if ([11, 0, 1].includes(month)) return 'winter'
  if ([2, 3, 4].includes(month)) return 'spring'
  if ([5, 6, 7].includes(month)) return 'summer'
  return 'fall'
}

export function BannerTile() {
  const navigate = useNavigate()
  const month = new Date().getMonth()
  const season = getSeason(month)

  const theme = {
    summer: {
      gradient: 'from-yellow-400 to-orange-500',
      title: 'Summer Sale',
      promo: '20% OFF',
      description:
        'Refresh your wardrobe with our latest summer collection. All items included in this special seasonal promotion!',
      bgPattern: (
        <>
          <circle cx="80%" cy="60%" r="100" fill="white" fillOpacity="0.1" />
          <circle cx="50%" cy="20%" r="40" fill="white" fillOpacity="0.1" />
          <path
            d="M0 20 L40 0 L40 40 Z"
            fill="white"
            fillOpacity="0.1"
            transform="translate(20, 40)"
          />
          <path
            d="M0 20 L40 0 L40 40 Z"
            fill="white"
            fillOpacity="0.1"
            transform="translate(460, 140) rotate(180)"
          />
        </>
      ),
    },
    fall: {
      gradient: 'from-yellow-600 to-red-600',
      title: 'Fall Sale',
      promo: '15% OFF',
      description:
        'Get cozy with our autumn collection. Limited-time fall discounts on all items!',
      bgPattern: (
        <>
          <circle cx="30%" cy="30%" r="60" fill="white" fillOpacity="0.08" />
          <path
            d="M20 0 L40 20 L20 40 L0 20 Z"
            fill="white"
            fillOpacity="0.08"
            transform="translate(400, 80)"
          />
        </>
      ),
    },
    winter: {
      gradient: 'from-blue-400 to-blue-700',
      title: 'Winter Sale',
      promo: '25% OFF',
      description:
        'Bundle up with our warmest winter deals. Shop now and save big!',
      bgPattern: (
        <>
          <circle cx="60%" cy="40%" r="80" fill="white" fillOpacity="0.1" />
          <path
            d="M0 10 L10 0 L20 10 L10 20 Z"
            fill="white"
            fillOpacity="0.08"
            transform="translate(300, 100)"
          />
        </>
      ),
    },
    spring: {
      gradient: 'from-green-300 to-teal-500',
      title: 'Spring Sale',
      promo: '18% OFF',
      description:
        'Step into the season with freshness. Enjoy spring discounts across our collection!',
      bgPattern: (
        <>
          <circle cx="40%" cy="50%" r="70" fill="white" fillOpacity="0.08" />
          <path
            d="M10 0 C15 10, 5 10, 10 20 C15 10, 25 10, 20 0 Z"
            fill="white"
            fillOpacity="0.07"
            transform="translate(220, 60)"
          />
        </>
      ),
    },
  }[season]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative overflow-hidden rounded-lg bg-gradient-to-r ${theme.gradient} h-full`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          {theme.bgPattern}
        </svg>
      </div>

      <div className="relative z-10 px-6 py-8 md:px-10">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-2 flex items-center justify-center"
          >
            <div className="bg-opacity-20 rounded-full bg-white px-4 py-1 text-sm font-medium tracking-wider text-black uppercase backdrop-blur-sm">
              Limited Time Offer
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-center text-3xl font-extrabold tracking-wide text-white uppercase md:text-4xl lg:text-5xl"
          >
            {theme.title}
          </motion.h2>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 flex justify-center"
          >
            <div className="relative animate-bounce">
              <div className="text-center text-5xl font-bold text-white md:text-6xl">
                {theme.promo}
              </div>
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 12, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                className="bg-opacity-20 absolute -top-1 -right-6 rotate-12 rounded-md border-2 border-green-600 bg-green-500 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                EXCLUSIVE
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-opacity-90 mb-6 text-center text-lg text-white"
          >
            {theme.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate({ to: '/collections' })}
              className="hover:bg-opacity-90 rounded-md bg-white px-6 py-3 font-medium text-orange-500 transition-all"
            >
              Shop {season.charAt(0).toUpperCase() + season.slice(1)} Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate({ to: '/collections' })}
              className="border-opacity-40 hover:bg-opacity-10 rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white hover:text-orange-500"
            >
              View All Deals
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-4 text-center text-sm text-white"
          >
            * Offer valid until end of the season. Cannot be combined with other
            promotions.
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function BannerNew() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white shadow-xl h-full"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-32 w-32 animate-pulse rounded-full bg-white opacity-10"></div>
        <div className="absolute top-5 right-10 h-12 w-12 rounded-full bg-white opacity-10"></div>
        <div className="absolute -right-8 -bottom-8 h-32 w-32 animate-pulse rounded-full bg-blue-400 opacity-20 delay-300"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold tracking-wider backdrop-blur-sm">
            JUST RELEASED
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            New Collection <span className="text-blue-200">Launch</span>
          </h1>
          <p className="mt-3 max-w-md text-sm text-blue-100 md:text-base">
            Exclusive designs at special introductory prices. Limited time offer
            ending soon. Don&apos;t miss out.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Link
            to="/collections"
            className="group relative isolate overflow-hidden rounded-full bg-white px-8 py-3 font-medium text-blue-600 shadow-md transition-all hover:shadow-lg flex"
          >
            {/* Background animation span */}
            <span className="absolute inset-0 z-0 h-full w-1/2 -translate-x-full transform bg-gradient-to-r from-blue-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:translate-x-full"></span>

            {/* Text & arrow di atas layer */}
            <span className="relative z-10">
              Shop Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
