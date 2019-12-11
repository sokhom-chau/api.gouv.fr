const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  public: ["SITE_NAME", "SITE_URL", "API_URL"]
});

module.exports = withConfig();
