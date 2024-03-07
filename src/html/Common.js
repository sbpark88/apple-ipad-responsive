// @ts-check

export default class Common {
  constructor() {
    this.init();
  }

  init() {
    import("reset-css");
    import("../css/common.scss");
  }

  setWorkbox() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered: ", registration);
          })
          .catch((registrationError) => {
            console.error(
              "Service Worker registration failed: ",
              registrationError,
            );
          });
      });
    }
  }
}
