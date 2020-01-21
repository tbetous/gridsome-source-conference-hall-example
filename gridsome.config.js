// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-source-conference-hall",
      options: {
        apiKey: "",
        eventId: "",
        filterConfirmedTalks: true
      }
    }
  ],
  templates: {
    Speaker: "/speaker/:id",
    Talk: "/talk/:id"
  }
};
