import { Image } from '@unpic/react'
import { Star } from 'lucide-react'
import type { media, product } from 'generated/prisma'
import { Card } from '@/components/ui/card'

interface ProductAndMedia extends product {
  media: Array<media>
}

interface ProductCardProps {
  product: ProductAndMedia
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4 relative overflow-hidden">
        <div className="flex relative overflow-hidden rounded-ele w-full aspect-square pb-4 p-0">
          <Image
            src={product.media[0].url}
            width={400}
            height={400}
            layout="constrained"
            className="w-full h-full object-cover overflow-hidden shrink-0 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center h-fit">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center justify-center gap-1.5 rounded-[calc(var(--radius)-4px)] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-fit border-border text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring shadow-sm/2 h-5 px-2 text-xs font-medium capitalize">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-sm font-semibold">
                  {product.rating_average.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground ">
                  ({product.rating_count})
                </span>
              </div>{' '}
            </div>
            <h3 className="font-semibold ext-sm sm:text-base leading-tight line-clamp-2 transition-colors duration-200">
              Smart Home Speaker
            </h3>
            <div className="flex flex-wrap gap-1">
              <span className="flex items-center justify-center gap-1.5 rounded-[calc(var(--radius)-4px)] border text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-fit border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-ring h-5 px-2 capitalize">
                {product.subcategory}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grow flex flex-col items-start justify-center">
        <div className='flex items-left justify-between w-full flex-col gap-3"'>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg sm:text-xl">
              ${product.discounted_price}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.normal_price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
