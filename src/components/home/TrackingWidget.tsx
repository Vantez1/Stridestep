import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BtnPrimary } from "../ui";

export default function TrackingWidget() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber.trim()) return;

    navigate(`/tracking?q=${encodeURIComponent(trackingNumber)}`);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Track Your Order
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) =>
            setTrackingNumber(e.target.value)
          }
          placeholder="Enter Tracking Number"
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
        />

        <BtnPrimary type="submit">
          Track Order
        </BtnPrimary>
      </form>
    </div>
  );
}