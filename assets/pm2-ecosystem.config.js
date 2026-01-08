module.exports = {
  apps: [
    {
      name: "app",
      script: "server.js",
      cwd: "/srv/app/repo",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
