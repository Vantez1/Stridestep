import { useState } from "react";

export default function WriteReview() {
  const [rating, setRating] = useState(5);

  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold">
        Write a Review
      </h2>

      <p className="mt-2 text-slate-500">
        Tell other customers what you think about this product.
      </p>

      <div className="mt-8">

        <label className="font-semibold">
          Your Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-700"
        />

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          Rating
        </label>

        <div className="mt-3 flex gap-2">

          {[1,2,3,4,5].map((star)=>(

            <button
              key={star}
              type="button"
              onClick={()=>setRating(star)}
              className="text-4xl transition hover:scale-110"
            >
              {star <= rating ? "⭐" : "☆"}
            </button>

          ))}

        </div>

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          Review
        </label>

        <textarea
          rows={5}
          placeholder="Share your experience..."
          className="mt-2 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-700"
        />

      </div>

      <button
        className="mt-8 rounded-2xl bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
      >
        Submit Review
      </button>

    </section>
  );
}