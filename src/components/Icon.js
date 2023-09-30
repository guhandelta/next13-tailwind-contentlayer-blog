import { cx } from "../utils"

export const MoonIcon = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    viewBox="0 0 44 52"
    {...rest}
    className={cx(className)}
  >
    <path d="M30.996 2C21.29 2.035 13.32 6.215 9.133 13.465a23.399 23.399 0 0 0-2.235 18.004c1.653 5.804 5.426 10.535 10.63 13.324 3.988 2.14 8.148 3.203 12.175 3.203 4.625 0 9.078-1.402 12.89-4.187A1.003 1.003 0 0 0 42.008 42c-6.89-.04-15.015-6.438-16.765-9.625l2.313-1.543a1.002 1.002 0 0 0-.164-1.754c-.067-.027-.883-.394-1.817-1.281.778-.824 1.395-2.508 1.426-5.785V22c0-.074-.027-.137-.043-.207-.012-.059-.012-.121-.035-.172a.95.95 0 0 0-.211-.324h-.004v-.004a1.01 1.01 0 0 0-.316-.215h-.004A1.006 1.006 0 0 0 26 21h-3v-.004c-.055-8.59 5.742-15.273 8.559-17.168a.986.986 0 0 0 .394-1.121A.996.996 0 0 0 31 2Zm-2.848 2.14C24.945 7.423 20.965 13.563 21 21h-9c-.55 0-1 .45-1 1s.45 1 1 1h3.05c.27 4.371 2.157 6 3.95 6 .625 0 2.203-.238 3.184-2.395a10.6 10.6 0 0 0 2.957 3.43l-1.7 1.133c-.359.242-.523.691-.406 1.11.067.23.172.472.297.73-.102 0-.176 0-.281.004-2.586.031-7.399.086-8.45-.739a.996.996 0 0 0-1.195-.027.999.999 0 0 0-.37 1.137c1.355 3.957 4.8 5.226 6.218 5.586 1.074.273 2.383.363 3.707.363 1.59 0 3.2-.129 4.46-.23.669-.055 1.25-.102 1.54-.102H29l.016-.004c2.87 2.11 6.441 3.969 10.02 4.688-6.126 3.265-13.618 3.074-20.563-.653-4.72-2.531-8.145-6.832-9.649-12.11a21.376 21.376 0 0 1 2.04-16.456c3.41-5.902 9.613-9.574 17.284-10.324ZM17.031 23h3.926c-.176 2.43-.926 4-1.957 4-.863 0-1.781-1.262-1.969-4Zm6.032 0h1.906c-.11 1.922-.453 2.805-.707 3.203a9.542 9.542 0 0 1-1.184-2.683ZM16.05 34.77c1.816.27 4.246.273 7.027.242.547-.008 1.063-.012 1.512-.012.027 0 .05-.004.082 0a20.882 20.882 0 0 0 2.066 2.145c-2.07.164-5.105.367-6.992-.114-.984-.254-2.531-.851-3.695-2.261Z" />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="1em"
    //   height="1em"
    //   viewBox="0 0 24 24"
    //   {...rest}
    //   className={cx(className)}
    // >
    //   <g
    //     fill="none"
    //     stroke="currentColor"
    //     strokeDasharray={2}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={2}
    //   >
    //     <path d="M12 21v1m9-10h1M12 3V2M3 12H2">
    //       <animate
    //         fill="freeze"
    //         attributeName="stroke-dashoffset"
    //         dur="0.2s"
    //         values="4;2"
    //       />
    //     </path>
    //     <path d="m18.5 18.5.5.5m-.5-13.5L19 5m-13.5.5L5 5m.5 13.5L5 19">
    //       <animate
    //         fill="freeze"
    //         attributeName="stroke-dashoffset"
    //         begin="0.2s"
    //         dur="0.2s"
    //         values="4;2"
    //       />
    //     </path>
    //   </g>
    //   <g fill="none" fillOpacity={0}>
    //     <path d="m15.22 6.03 2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81z">
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
    //         dur="0.4s"
    //         values="0;1"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
    //         dur="0.4s"
    //         values="1;0"
    //       />
    //     </path>
    //     <path d="M13.61 5.25 15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
    //         dur="0.4s"
    //         values="0;1"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
    //         dur="0.4s"
    //         values="1;0"
    //       />
    //     </path>
    //     <path d="M19.61 12.25 21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
    //         dur="0.4s"
    //         values="0;1"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
    //         dur="0.4s"
    //         values="1;0"
    //       />
    //     </path>
    //     <path d="m20.828 9.731 1.876-1.439-2.366-.067L19.552 6l-.786 2.225-2.366.067 1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
    //         dur="0.4s"
    //         values="0;1"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="fill-opacity"
    //         begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
    //         dur="0.4s"
    //         values="1;0"
    //       />
    //     </path>
    //   </g>
    //   <mask id="a">
    //     <circle cx={12} cy={12} r={12} fill="#fff" />
    //     <circle cx={22} cy={2} r={3} fill="#fff">
    //       <animate
    //         fill="freeze"
    //         attributeName="cx"
    //         begin="0.1s"
    //         dur="0.4s"
    //         values="22;18"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="cy"
    //         begin="0.1s"
    //         dur="0.4s"
    //         values="2;6"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="r"
    //         begin="0.1s"
    //         dur="0.4s"
    //         values="3;12"
    //       />
    //     </circle>
    //     <circle cx={22} cy={2} r={1}>
    //       <animate
    //         fill="freeze"
    //         attributeName="cx"
    //         begin="0.1s"
    //         dur="0.4s"
    //         values="22;18"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="cy"
    //         begin="0.1s"
    //         dur="0.4s"
    //         values="2;6"
    //       />
    //       <animate
    //         fill="freeze"
    //         attributeName="r"
    //         begin="0.1s"
    //         dur="0.4s"
    //         values="1;10"
    //       />
    //     </circle>
    //   </mask>
    //   <circle cx={12} cy={12} r={6} fill="currentColor" mask="url(#a)">
    //     <set attributeName="opacity" begin="0.5s" to={0} />
    //     <animate
    //       fill="freeze"
    //       attributeName="r"
    //       begin="0.1s"
    //       dur="0.4s"
    //       values="6;10"
    //     />
    //   </circle>
    // </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={24}
        viewBox="0 0 24 34"
        {...rest}
        className={cx(className)}
  >
    <path d="M14.984.986A1 1 0 0 0 14 2v3a1 1 0 1 0 2 0V2A1 1 0 0 0 14.984.986zM5.797 4.8a1 1 0 0 0-.695 1.717l2.12 2.12a1 1 0 1 0 1.415-1.413L6.516 5.102a1 1 0 0 0-.72-.303zm18.375 0a1 1 0 0 0-.688.303l-2.12 2.12a1 1 0 1 0 1.413 1.415l2.121-2.121a1 1 0 0 0-.726-1.717zM15 8a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM2 14a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H2zm23 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zM7.91 21.06a1 1 0 0 0-.687.303l-2.121 2.121a1 1 0 1 0 1.414 1.414l2.12-2.12a1 1 0 0 0-.726-1.717zm14.15 0a1 1 0 0 0-.697 1.717l2.121 2.121a1 1 0 1 0 1.414-1.414l-2.12-2.12a1 1 0 0 0-.717-.303zm-7.076 2.926A1 1 0 0 0 14 25v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1.016-1.014z" />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={33}
      fill="none"
      viewBox="0 0 42 43"
      {...rest}
      className={cx(className)}
    >
      <g clipPath="url(#a)">
        <path
          fill="#0076B2"
          d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
        />
        <path
          fill="#fff"
          d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
);

export const GitHubIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={33}
      viewBox="0 0 42 43"
      {...rest}
      className={cx(className, "bg-white rounded-3xl")}
    >
      <g fill="#181616">
        <path
          fillRule="evenodd"
          d="M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z"
          clipRule="evenodd"
        />
        <path d="M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z" />
      </g>
    </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={33}
      fill="none"
      viewBox="0 0 42 43"
      {...rest}
      className={cx(className)}
    >
      <g clipPath="url(#a)">
        <path
          fill="#1D9BF0"
          d="M37.7 13.24c.026.37.026.74.026 1.114 0 11.386-8.668 24.517-24.518 24.517v-.006A24.394 24.394 0 0 1 0 35.002a17.303 17.303 0 0 0 12.753-3.571 8.627 8.627 0 0 1-8.05-5.984 8.584 8.584 0 0 0 3.89-.149 8.617 8.617 0 0 1-6.912-8.446v-.11a8.562 8.562 0 0 0 3.91 1.08A8.627 8.627 0 0 1 2.926 6.315a24.457 24.457 0 0 0 17.758 9.002 8.622 8.622 0 0 1 2.494-8.233 8.626 8.626 0 0 1 12.19.374 17.29 17.29 0 0 0 5.473-2.092 8.649 8.649 0 0 1-3.788 4.766A17.135 17.135 0 0 0 42 8.776a17.504 17.504 0 0 1-4.3 4.464Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
);