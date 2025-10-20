import { useId } from 'react'
import { SearchIcon, ShoppingCartIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { MenuNavbar } from './menu-navbar'
import Logo from '@/components/navbar/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function MainNavbar() {
  const id = useId()

  return (
    <header className="border-b w-full sticky top-0 z-50 bg-background">
      <div className="flex h-16 items-center justify-between gap-4 container mx-auto">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
          </div>
        </div>
        {/* Middle area */}
        <div className="grow">
          {/* Search form */}
          <div className="relative mx-auto w-full max-w-xs">
            <Input
              id={id}
              className="peer h-8 ps-8 pe-10"
              placeholder="Search..."
              type="search"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/80 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
              <kbd className="inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </div>
      </div>
      {/* Bottom navigation */}
      <div className="border-t py-2 max-md:hidden">
        <MenuNavbar />
      </div>
    </header>
  )
}
