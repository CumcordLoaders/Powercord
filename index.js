const {Plugin} = require("powercord/entities");

module.exports = class CumcordLoader extends Plugin {
  async startPlugin() {
    eval(
      await (
        await fetch(
          "https://raw.githubusercontent.com/Cumcord/builds/main/build.js",
          {cache: "no-store"}
        )
      ).text()
    );
  }
  pluginWillUnload() {
    cumcord?.uninject();
  }
};
