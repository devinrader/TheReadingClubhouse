module.exports = (config) => {

    config.addPassthroughCopy("src/img");
    config.addPassthroughCopy("src/styles");

    return {
      dir: {
        input: "./src",
        output: "./dist"
      }
    };
  };