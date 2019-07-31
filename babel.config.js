module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          Assets: "./assets",
          Components: "./src/components"
        }
      }
    ],
    ["babel-plugin-styled-components", { displayName: true }]
  ]
};
