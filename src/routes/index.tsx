import { Link, createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Zap } from "lucide-react";
import { CheckoutFlowTile } from "@/components/heroes/checkout-flow-tile";
import { CustomerReviewsTile } from "@/components/heroes/customer-review-tile";
import { FeatureHighlightTile } from "@/components/heroes/feature-highlight-tile";
import { LiveStatsTile } from "@/components/heroes/live-stats-tile";
import { MobileAppTile } from "@/components/heroes/mobile-app-tile";
import { ProductGridTile } from "@/components/heroes/product-grid-tile";
import { BannerNew, BannerTile } from "@/components/heroes/banner-tile";

import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: App,
  loader: async ({ context }) => {
    return await context.queryClient.fetchQuery(
      context.trpc.products.list.queryOptions({
        sort: "newest",
        take: 15,
      })
    );
  },
});

function App() {
  const newProducts = Route.useLoaderData();

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2
          className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          What Makes Us Unique
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Discover the features that set our e-commerce platform apart from the
          rest
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-6 md:gap-6 lg:grid-cols-12">
        {/* Hero Product - Large tile */}
        <div className="md:col-span-6 md:row-span-2 lg:col-span-8">
          <BannerTile />
        </div>

        {/* Stats - Two vertical tiles */}
        <div className="md:col-span-3 lg:col-span-4">
          <LiveStatsTile
            label="Active Orders"
            value={15420}
            suffix="+"
            trend={23}
            color="primary"
          />
        </div>

        <div className="md:col-span-3 lg:col-span-4">
          <LiveStatsTile
            label="Happy Customers"
            value={98}
            suffix="%"
            trend={12}
            color="success"
          />
        </div>

        {/* Product Grid */}
        <div className="md:col-span-6 lg:col-span-4">
          <ProductGridTile />
        </div>

        {/* Mobile App */}
        <div className="md:col-span-6 lg:col-span-4">
          <MobileAppTile image="/hp.png" />
        </div>

        {/* Checkout Flow */}
        <div className="md:col-span-6 lg:col-span-4">
          <CheckoutFlowTile />
        </div>

        {/* Customer Reviews */}
        <div className="md:col-span-6 lg:col-span-5">
          <CustomerReviewsTile />
        </div>

        {/* Analytics */}
        <div className="md:col-span-6 lg:col-span-7">
          <BannerNew />
        </div>

        {/* Feature Highlights - Three smaller tiles */}
        <div className="md:col-span-6 lg:col-span-4">
          <FeatureHighlightTile
            icon={Zap}
            title="Lightning Fast"
            description="Experience blazing fast checkout and instant order confirmation"
            delay={0.5}
          />
        </div>

        <div className="md:col-span-3 lg:col-span-4">
          <FeatureHighlightTile
            icon={ShieldCheck}
            title="Secure Payments"
            description="Bank-level encryption keeps your transactions safe and secure"
            delay={0.6}
          />
        </div>

        <div className="md:col-span-3 lg:col-span-4">
          <FeatureHighlightTile
            icon={HeartHandshake}
            title="24/7 Support"
            description="Our dedicated team is always here to help you shop with confidence"
            delay={0.7}
          />
        </div>
      </div>
      {/* new products */}
      <div className="mt-10 flex h-fit flex-col gap-4">
        <h3 className="text-lg font-bold lg:text-2xl xl:text-4xl">
          New Products
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {newProducts.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Button asChild>
            <Link to="/">View more</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
