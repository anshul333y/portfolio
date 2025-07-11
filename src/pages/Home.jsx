const Home = ({ setPage }) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm a <span className="text-indigo-400">Creative Developer</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I build beautiful, responsive, and user-friendly web applications.
          Turning complex problems into elegant digital solutions.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setPage({ name: "projects" })}
            className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => setPage({ name: "contact" })}
            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;