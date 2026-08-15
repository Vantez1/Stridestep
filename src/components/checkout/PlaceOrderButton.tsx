type PlaceOrderButtonProps = {
  loading?: boolean;
  onClick: () => void;
};

export default function PlaceOrderButton({
  loading = false,
  onClick,
}: PlaceOrderButtonProps) {
  return (
    <div className="mt-8">

      <button
        onClick={onClick}
        disabled={loading}
        className={`w-full rounded-2xl py-5 text-lg font-bold text-white transition-all duration-300 ${
          loading
            ? "cursor-not-allowed bg-gray-400"
            : "bg-emerald-600 hover:scale-[1.02] hover:bg-emerald-700 active:scale-100"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-3">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            Processing Order...
          </span>
        ) : (
          "Place Order"
        )}
      </button>

      <p className="mt-4 text-center text-sm text-slate-500">
        🔒 Your payment information is securely processed.
      </p>

    </div>
  );
}