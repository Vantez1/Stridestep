import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "James Mwangi",
    rating: 5,
    date: "2 days ago",
    verified: true,
    photos: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300",
    ],
    comment:
      "Excellent quality. Very comfortable and the delivery was incredibly fast. The cushioning is amazing and I've been wearing them every day.",
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    rating: 5,
    date: "1 week ago",
    verified: true,
    photos: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300",
    ],
    comment:
      "Exactly as described. Fits perfectly and looks even better in person. I received several compliments the first day I wore them.",
  },
  {
    id: 3,
    name: "Brian Otieno",
    rating: 4,
    date: "3 weeks ago",
    verified: true,
    photos: [],
    comment:
      "Very good value for money. Comfortable for long walks and the quality exceeded my expectations. I will definitely buy another pair.",
  },
  {
    id: 4,
    name: "Faith Njeri",
    rating: 5,
    date: "1 month ago",
    verified: true,
    photos: [
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=300",
    ],
    comment:
      "Premium quality from the packaging to the shoes themselves. The delivery was fast and customer service was excellent.",
  },
  {
    id: 5,
    name: "Kevin Kiptoo",
    rating: 4,
    date: "1 month ago",
    verified: true,
    photos: [],
    comment:
      "Great shoes with excellent comfort. The sizing was accurate and they are perfect for everyday wear.",
  },
];

export default function ProductReviews() {

  const [helpful, setHelpful] = useState<Record<number, number>>({
  1: 24,
  2: 18,
  3: 11,
  4: 16,
  5: 9,
});

  return (
    <section className="mt-20">

  <h2 className="mb-8 text-3xl font-bold">
    Customer Reviews
  </h2>

  <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">

    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <div className="text-5xl font-black">
          4.8
        </div>

        <div className="mt-2 text-2xl text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-2 text-slate-500">
          Based on 248 reviews
        </p>

      </div>

      <div className="flex-1 lg:max-w-md">

        {[
          ["5",90],
          ["4",7],
          ["3",2],
          ["2",1],
          ["1",0],
        ].map(([stars,percent])=>(

          <div
            key={stars}
            className="mb-3 flex items-center gap-4"
          >

            <span className="w-6 font-semibold">
              {stars}★
            </span>

            <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-yellow-400"
                style={{
                  width: `${percent}%`
                }}
              />

            </div>

            <span className="w-10 text-sm text-slate-500">
              {percent}%
            </span>

          </div>

        ))}

      </div>

    </div>

  </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">

  <div className="flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
      {review.name.charAt(0)}
    </div>

    <div>

      <h3 className="font-bold">
        {review.name}
      </h3>

      <div className="mt-1 flex items-center gap-2">

        <p className="text-sm text-slate-500">
          {review.date}
        </p>

        {review.verified && (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            ✓ Verified Purchase
          </span>
        )}

      </div>

    </div>

  </div>

  <div className="text-lg text-yellow-500">
    {"⭐".repeat(review.rating)}
  </div>

</div>

            <p className="mt-4 leading-7 text-slate-600">
              {review.comment}
            </p>

{review.photos.length > 0 && (
  <div className="mt-5 flex gap-3 overflow-x-auto">
    {review.photos.map((photo, index) => (
      <img
        key={index}
        src={photo}
        alt={`Review ${index + 1}`}
        className="h-24 w-24 rounded-xl object-cover shadow-md transition hover:scale-105"
      />
    ))}
  </div>
)}

<div className="mt-5 flex items-center gap-4">

  <button
    onClick={() =>
      setHelpful((prev) => ({
        ...prev,
        [review.id]: prev[review.id] + 1,
      }))
    }
    className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-blue-700 hover:bg-blue-50"
  >
    👍 Helpful ({helpful[review.id]})
  </button>

  <button
    className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-blue-700 hover:bg-blue-50"
  >
    Reply
  </button>

</div>

          </div>
        ))}
      </div>
    </section>
  );
}