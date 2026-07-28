export default function BrandShowcase() {
  const brands = [
  {
    name: "Nike",
    image: "/images/nike-airmax.jpg",
    description: "Performance Running",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Adidas",
    image: "/images/adidas-ultraboost.jpg",
    description: "Everyday Comfort",
    color: "from-blue-600 to-sky-500",
  },
  {
    name: "Puma",
    image: "/images/puma-rsx.jpg",
    description: "Street Style",
    color: "from-slate-700 to-slate-500",
  },
  {
    name: "New Balance",
    image: "/images/newbalance530.jpg",
    description: "Lifestyle Collection",
    color: "from-emerald-600 to-green-400",
  },
];

  return (
    <section
  className="relative overflow-hidden py-28"
  style={{
    background:
      "linear-gradient(to bottom, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
  }}
>
{/* Background Decoration */}
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

  <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-amber-brand/10 blur-[140px]" />

</div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-brand">
            TOP BRANDS
          </p>

          <h2 className="mt-4 font-display text-5xl font-extrabold leading-tight text-navy lg:text-6xl">
  Trusted Global
  <span className="block text-amber-brand">
    Footwear Brands
  </span>
</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover authentic collections from the world's most recognized
            footwear brands, carefully selected for quality, comfort, and style.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="
group
relative
animate-fade-up
flex
h-[380px]
cursor-pointer
items-center
justify-center
rounded-3xl
border
border-white/60
bg-white/90
shadow-lg
backdrop-blur-md
transition-all
duration-500
hover:-translate-y-3
hover:border-amber-brand/40
hover:shadow-[0_25px_60px_rgba(15,23,42,0.15)]
"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
<div
  className="
    absolute
    inset-0
    rounded-3xl
    bg-gradient-to-br
    from-amber-brand/10
    via-transparent
    to-blue-500/10
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
/>

              <img
  loading="lazy"
  src={brand.image}
  alt={brand.name}
  className="relative z-10  h-60 w-full rounded-t-3xl object-cover transition-all duration-700 group-hover:scale-110"
/>
<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-slate-900/70
    via-transparent
    to-transparent
    opacity-0
    transition-all
    duration-500
    group-hover:opacity-100
  "
/>

<div className="relative z-20 p-6">

  <h3 className="text-2xl font-bold text-slate-900">
    {brand.name}
  </h3>

  <p className="mt-2 text-slate-500">
    {brand.description}
  </p>

 <div
  className="
    mt-6
    inline-flex
    items-center
    gap-2
    font-semibold
    text-amber-brand
    transition-all
    duration-300
    group-hover:translate-x-2
  "
>
    Explore Collection
<span className="transition-transform duration-300 group-hover:translate-x-1">
  →
</span>
  </div>

</div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}