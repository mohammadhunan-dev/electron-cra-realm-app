const Realm = window.require("realm");
const fs = window.require("fs");

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  console.log("fs", fs);
  // console.log("Realm", Realm);
  // if (app === undefined) {
  //   const appId = "tutsbrawl-qfxxj"; // Set Realm app ID here.
  //   const appConfig = {
  //     id: appId,
  //     timeout: 10000,
  //     app: {
  //       name: "default",
  //       version: "0",
  //     },
  //   };
  //   app = new Realm.App(appConfig);
  // }
  // return app;
}
