"use client";

export default function LearnMore() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500 px-6 py-12">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl border border-gray-100 dark:border-gray-800 p-10 flex flex-col items-center">
        <img
          src="/window.svg"
          alt="Grievance System Logo"
          className="w-20 h-20 mb-6"
        />
        <h1 className="text-4xl font-extrabold text-center mb-4 text-indigo-700 dark:text-indigo-400 tracking-wide">
          Learn More About Mero Grievance System
        </h1>
        <p className="text-lg text-center mb-8 text-gray-700 dark:text-gray-300">
          Mero Grievance System is designed to empower citizens and users to
          voice their concerns, report issues, and provide feedback to help
          improve our community and services.
        </p>
        <div className="w-full space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              Why Use Our System?
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                100% Confidential: Your identity and submissions are protected.
              </li>
              <li>24/7 Availability: Submit grievances anytime, anywhere.</li>
              <li>
                Fast Response: Our team is dedicated to resolving issues
                quickly.
              </li>
              <li>Easy to Use: Simple forms and clear instructions.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Click{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Submit a Grievance
                </span>{" "}
                on the homepage.
              </li>
              <li>
                Fill out the form with your details and issue description.
              </li>
              <li>Submit your grievance securely.</li>
              <li>Track your submission and receive updates.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              Our Commitment
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We are committed to transparency, accountability, and continuous
              improvement. Your feedback helps us serve you better.
            </p>
          </section>
        </div>
        <a
          href="/gunaso"
          className="mt-10 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          Submit a Grievance
        </a>
      </div>
    </div>
  );
}
