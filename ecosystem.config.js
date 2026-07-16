module.exports = {
  apps : [{
    name   : "API-GESSA",
    script : "./build/src/index.js",
    watch  : true,
    env: {
      "PORT": "3000",
      "NODE_ENV": "development"
    }
  }]
}
