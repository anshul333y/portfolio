import profile from "../assets/profile.png";

export default function Home({ setPage }) {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 blur-xl opacity-60"></div>

          <img
            src={profile}
            alt="Profile"
            className="relative w-44 h-44 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Creative Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
          I build modern, responsive and scalable web applications that combine
          clean design with exceptional user experience.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button
            onClick={() => setPage({ name: "projects" })}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
          >
            View My Work
          </button>

          <button
            onClick={() => setPage({ name: "contact" })}
            className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
