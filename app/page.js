import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="flex flex-row justify-between px-6 py-6">
        <h2>Glib.</h2>
        <div className="flex flex-row gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Work</a>
        </div>
        <button>Let&apos;s Talk</button>
      </nav>
      <section className="text-center my-20">
        {/* Heading Title */}
        <h2 className="text-6xl font-semibold my-10">
          Want to Build Fast and Ship Fast?
        </h2>
        <p className="text-xl">
          We can help you to rapidly build your idea. Before your Competitors!
        </p>
      </section>
      {/* Why Choose Us */}
      <section className="bg-white dark:bg-gray-900 text-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 mx-auto lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Why Choose Us?
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              We are a team of professional developers, having proven experience
              in building fast and scalable applications.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 mx-auto w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Rapid Development
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We will help you build your Product within 10 days. It may take
                more time depending on the complexity of the project.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 mx-auto w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Fast and Scalable
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are team of professional devs who have experience in building
                fast and scalable applications.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 mx-auto w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Support
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are here to actively support you even after product launch so
                you can focus on growth and not on code.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-90">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto text-center max-w-4xl">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-whiite">
              Backed By Experience. Proven by Numbers.
            </h2>
            <p className="mb-6 font-light text-gray-600 dark:text-gray-600 md:text-lg">
              Meet your developers where they already are. GitHub is home to
              over 40 million developers and the world’s largest open source
              community.
            </p>
            <div className="flex flex-row justify-between my-12">
              <div>
                <p className="text-4xl font-extrabold">5+</p>
                <p className="text-gray-600 dark:text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">50000+</p>
                <p className="text-gray-600 dark:text-gray-600 ">Monthly Users</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">&infin;</p>
                <p className="text-gray-600 dark:text-gray-600">Love</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Started Section with Price */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              We build Affordable Applications on Modern Tech Stack
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Pricing Starts from $500, depends on the complexity and deadline of the project.
            </p>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get Free Quotation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
