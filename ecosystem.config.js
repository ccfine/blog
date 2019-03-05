module.exports = {
  deploy: {
    production: {
      user: "root",
      host: "129.204.68.85",
      ref: "origin/master",
      repo: "https://github.com/ccfine/blog.git ",
      path: "/ccfine/project/blog",
      "post-deploy": "npm install && yarn run build && cd /ccfine/deployment/blog && rm -rf * && cd /ccfine/project/blog/current/build && cp -r * /ccfine/deployment/blog"
    }
  }
}