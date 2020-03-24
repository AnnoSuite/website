import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

const IS_BROWSER = typeof window !== "undefined";

export const useGA = ({ id, options }) => {
  if (IS_BROWSER && !window.ga) {
    ReactGA.initialize(id, options);
  }
  const router = useRouter();

  const routeChange = url => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
  };
  const routeChangeError = url => {
    ReactGA.exception(url);
  };

  useEffect(() => {
    // router.events.on("routeChangeStart", routeChange);
    router.events.on("routeChangeComplete", routeChange);
    router.events.on("routeChangeError", routeChangeError);
    // router.events.on("hashChangeStart", routeChange);
    router.events.on("hashChangeComplete", routeChange);

    () => {
      // router.events.off("routeChangeStart", routeChange);
      router.events.off("routeChangeComplete", routeChange);
      router.events.off("routeChangeError", routeChangeError);
      // router.events.off("hashChangeStart", routeChange);
      router.events.off("hashChangeComplete", routeChange);
    };
  });
};
