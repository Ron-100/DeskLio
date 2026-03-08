function Unauthorised() {
  return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0B1120]">

        <div className="absolute inset-0 bg-linear-to-br from-[#0B1120] via-[#0F172A] to-[#155DFC]/30" />

        <div className="absolute -top-32 -left-32 w-100 h-100 bg-[#155DFC] opacity-20 rounded-full blur-[120px]" />

        <div className="absolute -bottom-32 -right-32 w-100 h-100 bg-indigo-500 opacity-20 rounded-full blur-[120px]" />

        <div
            className="relative z-10 text-center px-10 py-12 rounded-2xl 
                    bg-white/5 backdrop-blur-xl 
                    border border-white/10
                    shadow-[0px_20px_60px_rgba(0,0,0,0.6)]"
        >
            {/* 404 Number */}
            <h1 className="text-[120px] font-bold text-white tracking-widest leading-none">
            404
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-2xl font-semibold text-white">
            Page Not Found
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-gray-400 max-w-md">
            The page you're looking for doesn't exist or may have been moved.
            Let’s get you back to your workspace.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4">
            <button
                onClick={() => window.history.back()}
                className="px-6 py-3 rounded-lg border border-white/20 
                    text-white hover:bg-white/10 transition-all"
            >
                Go Back
            </button>

            <button
                onClick={() => (window.location.href = "/dashboard")}
                className="px-6 py-3 rounded-lg bg-[#155DFC] 
                    hover:bg-[#0F4CD7] transition-all 
                    text-white font-semibold 
                    shadow-lg shadow-[#155DFC]/40"
            >
                Go to Dashboard
            </button>
            </div>
        </div>
        </div>
  );
}

export default Unauthorised;
