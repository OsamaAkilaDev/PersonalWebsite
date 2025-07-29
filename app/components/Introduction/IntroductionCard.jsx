import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

function copyEmail() {
  navigator.clipboard.writeText("osama.akila20@gmail.com");
  toast("E-mail copied successfully", {
    icon: "✉️",
    style: {
      borderRadius: "10px",
      background: "#1f1c1b",
      color: "#fff",
    },
  });
}

function IntroductionCard() {
  return (
    <div className="gap-7 flex flex-col fadeIn">
      <h1
        className={`text-7xl max-md:text-5xl max-w-85 font-bold text-justify tracking-wider`}
      >
        <span className="text-blue-500">Software</span> Engineer
      </h1>

      <p className="max-w-130 text-xl max-md:text-md text-gray-400">
        Hi, I'm <span className="text-blue-500">Osama Akila</span>, a passionate
        software developer with experience in{" "}
        <span className="text-blue-500 font-bold">Frontend</span>,{" "}
        <span className="text-blue-500 font-bold">Backend</span>, and{" "}
        <span className="text-blue-500 font-bold">AI</span>.<br />I build
        full-stack applications that combine clean UI, robust architecture, and
        intelligent features to deliver real-world impact.
      </p>

      <div className="flex gap-2 flex-wrap">
        <Link
          href="https://www.linkedin.com/in/osama-akila-9a847a268/"
          target="_blank"
          className="bg-blue-500 h-10 text-lg rounded-sm hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-target md:cursor-none flex justify-center items-center px-3 gap-1.5"
        >
          <div className="h-5 flex items-center justify-center">
            <svg
              height="100%"
              width="100%"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 382 382"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ffffff"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                ></path>
              </g>
            </svg>
          </div>
          LinkedIn
        </Link>

        <Link
          href="https://github.com/OsamaAkilaDev"
          target="_blank"
          className="bg-blue-500 h-10 text-lg rounded-sm hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-target md:cursor-none flex justify-center items-center px-3 gap-1.5"
        >
          <div className="h-5 flex items-center justify-center">
            <svg
              height="100%"
              width="100%"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>github logo</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokewidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#ffffff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#ffffff]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          GitHub
        </Link>

        <button
          onClick={copyEmail}
          className="bg-blue-500 h-10 text-lg rounded-sm hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-target md:cursor-none flex justify-center items-center px-3 gap-1.5"
        >
          <div className="h-5 flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Email
        </button>
      </div>
    </div>
  );
}

export default IntroductionCard;
