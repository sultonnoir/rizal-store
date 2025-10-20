import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import { Image } from '@unpic/react'

export function ProductGridTile() {
  const products = [
    { image: '/1.jpg', name: 'Luxury Smartwatch' },
    { image: '/2.jpg', name: 'Leather Backpack' },
    { image: '/3.jpg', name: 'Ceramic Mug' },
    { image: '/4.jpg', name: 'Wireless Headphones' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative overflow-hidden rounded-3xl bg-card border border-card-border p-6 h-full min-h-[300px]"
      data-testid="card-product-grid"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Product Catalog
          </h3>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          1200 + items
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.slice(0, 4).map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
            data-testid={`product-item-${index}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              layout="constrained"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-sm font-medium">{product.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
