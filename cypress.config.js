const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://gallery-app.vivifyideas.com/",
    createUrL :"https://gallery-app.vivifyideas.com/create",
    watchForFileChange:false,
  },
  env : {
    validEmail: "red@gmail.com",
    validPassword : "357753357"
  }
  },
);
