import { XOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";
import { socialsLink, findUsLink } from "@/constant/links";

export const Footer = () => {
  return (
    <footer className="p-8 m-auto text-white max-w-screen-2xl">
      <div className="flex flex-col md:flex-row md:justify-end gap-8 mb-10">
        {/* <div className="w-full md:w-1/3">
          <h5 className="font-bold text-lg mb-2">
            WHATSBOT.AI - Whatsapp Bot Website
          </h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, itaque, dolores laboriosam ducimus necessitatibus
            accusamus omnis commodi, dolor ipsa est saepe repudiandae natus.
            Temporibus officiis, incidunt optio possimus illum voluptas.
          </p>
        </div> */}
        {/* <div className="w-full md:w-1/4">
          <h5 className="font-bold text-lg mb-2">Information</h5>
          <div className="flex flex-col gap-y-2">
            <Link
              href={"#press"}
              className="no-underline hover:underline text-sm"
            >
              Press Centre
            </Link>
            <Link
              href={"#press"}
              className="no-underline hover:underline text-sm"
            >
              Our Blog
            </Link>
            <Link
              href={"#press"}
              className="no-underline hover:underline text-sm"
            >
              Term and Condition
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h5 className="font-bold text-lg mb-2">Menu</h5>
          <div className="flex flex-col gap-y-2">
            <Link
              href={"#press"}
              className="no-underline hover:underline text-sm"
            >
              About
            </Link>
            <Link
              href={"#press"}
              className="no-underline hover:underline text-sm"
            >
              Services
            </Link>
            <Link
              href={"#press"}
              className="no-underline hover:underline text-sm"
            >
              Blog
            </Link>
          </div>
        </div> */}
        {/* <div className="w-full md:w-1/4 flex flex-wrap justify-end">
          <div className="font-bold text-xl !text-left mb-2">Contact Us</div>
          <div className="w-full text-right my-2">
            <Link
              href={socialsLink.email}
              className="no-underline hover:underline text-sm"
            >
              support@washingai.io
            </Link>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="order-3 md:order-1 text-sm">
          <h5>&copy; Zylo 2025 All rights reserved.</h5>
        </div>
        <div className="order-2 md:order-2 flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <Link
            href={findUsLink.pumpfun}
            className="no-underline hover:underline"
          >
            Pumpfun
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={findUsLink.dexscreener}
            className="no-underline hover:underline"
          >
            Dexscreener
          </Link>
          <Link
            href={socialsLink.whitepaper}
            className="no-underline hover:underline"
          >
            Documentation
          </Link>
        </div>
        <div className="order-1 md:order-3 flex gap-4">
          {/* <Link href={socialsLink.telegram} className="no-underline">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 30 30"
                className="w-5 h-5"
              >
                <path
                  d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </Link> */}
          <Link href={socialsLink.twitter} className="no-underline">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
              <XOutlined />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};
