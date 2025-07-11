import { GithubIcon, LinkedInIcon } from "../assets/Icons";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Get In Touch
      </h2>
      <p className="text-gray-400 text-center mb-8">
        I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!
      </p>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center">
        <p className="text-lg text-white">You can email me at:</p>
        <a
          href="mailto:anshul333y@gmail.com"
          className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
        >
          anshul333y@gmail.com
        </a>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/anshul333y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/anshul333y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;