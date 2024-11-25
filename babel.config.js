module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    ["@babel/plugin-transform-private-methods", { loose: true }],
    ["@babel/plugin-transform-class-properties", { loose: true }],
    ["@babel/plugin-transform-private-property-in-object", { loose: true }],
  ],
};
