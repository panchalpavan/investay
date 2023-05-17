import "../styles/globals.scss";
import "../styles/animations.scss";
import "../styles/keyframes.scss";
import CommonLayout from "../components/Layout/CommonLayout";
import NonAuthLayout from "../components/Layout/public/NonAuthLayout";
import AdminLayout from "../components/Layout/admin/Layout";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../redux/store";
import DashBoardSidebar from "../components/Layout/dashboard/DashBoardSidebar";
import CommonProfile from "../components/Layout/profile/CommonProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "../components/Layout/public/AuthLayout";
import dynamic from "next/dynamic";
import Footer from "../components/Layout/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
const Header = dynamic(() => import("../components/Layout/Header"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [buttonMode, setButtonMode] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      // console.log(Component, pageProps);
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 640) {
          setButtonMode(true);
        } else {
          setButtonMode(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 640) {
        setButtonMode(true);
      } else {
        setButtonMode(false);
      }

      //TODO: for real time window resize
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 1280) {
          setWindowWidth(true);
        } else {
          setWindowWidth(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 1024) {
        setWindowWidth(true);
      } else {
        setWindowWidth(false);
      }

      //TODO: for scroll to Top
      document.addEventListener("scroll", (e) => {
        setNavShadow();
      });
      setNavShadow();
    }

    Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.isReady]);

  const setNavShadow = () => {
    if (window.pageYOffset > 850) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }

    if (window.pageYOffset > 20) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  return Component.public ? (
    <Provider store={store}>
      {/* {loading && <LoadingSpinner />} */}
      <NonAuthLayout {...pageProps} windowWidth={windowWidth}>
        <Component {...pageProps} />
        <ToastContainer />
      </NonAuthLayout>
    </Provider>
  ) : Component.public1 ? (
    <Provider store={store}>
      {/* {loading && <LoadingSpinner />} */}
      <div className={`fixed w-full top-0 z-[100] `}>
        <Header buttonMode={buttonMode} shadow={shadow} />
      </div>
      <div className="mt-[3.5rem] pt-2 w-full bg-white">
        <Component
          {...pageProps}
          windowWidth={windowWidth}
          scrollToTop={scrollToTop}
          shadow={shadow}
        />
      </div>
      <Footer />
      <ToastContainer />
    </Provider>
  ) : (
    <Provider store={store}>
      {/* {loading && <LoadingSpinner />} */}
      <AuthLayout {...pageProps} windowWidth={windowWidth}>
        <CommonLayout>
          {Component.admin ? (
            <AdminLayout>
              <Component
                {...pageProps}
                windowWidth={windowWidth}
                scrollToTop={scrollToTop}
              />
            </AdminLayout>
          ) : Component.sidebar ? (
            <DashBoardSidebar>
              <Component
                {...pageProps}
                windowWidth={windowWidth}
                scrollToTop={scrollToTop}
              />
            </DashBoardSidebar>
          ) : Component.profile ? (
            <CommonProfile>
              <Component
                {...pageProps}
                windowWidth={windowWidth}
                scrollToTop={scrollToTop}
              />
            </CommonProfile>
          ) : (
            <Component
              {...pageProps}
              windowWidth={windowWidth}
              scrollToTop={scrollToTop}
            />
          )}
        </CommonLayout>
      </AuthLayout>
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
