// Production env
module.exports = {
  apps: [
    {
      name: "smaug-wbs",
      cwd: "./output/server",
      script: "node index.mjs",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
