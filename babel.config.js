module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
<<<<<<< HEAD
    plugins: [
      // require.resolve("expo-router/babel"),
      "react-native-worklets/plugin",
    ],
=======
    plugins: [require.resolve("expo-router/babel")],
>>>>>>> 5a203208901fefdc10114716683351b844db2323
  };
};
