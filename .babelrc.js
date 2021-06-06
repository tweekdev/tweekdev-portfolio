/**
 * @param {{ caller: (cb: (caller?: { name: string; }) => string) => string; }} api
 */
module.exports = (api) => {
    const [callerName] = api
        .caller((caller) => {
            return [
                caller === undefined ? "" : caller.name,
                process.env.NODE_ENV,
            ].join("|");
        })
        .split("|");

    return {
        ignore: [
            "**/*.d.ts",
            ...(callerName === "babel-loader" ? [] : ["**/*.stories.tsx"]),
            ...(callerName === "babel-jest"
                ? []
                : ["**/__mocks__/*", "**/__tests__/*"]),
            "**/node_modules/*",
        ],
        presets: [
            [
                "next/babel",
                callerName === "babel-jest"
                    ? {
                          "preset-env": {
                              modules: "commonjs",
                              targets: { node: "current" },
                          },
                      }
                    : undefined,
            ],
            [
                "@emotion/babel-preset-css-prop",
                // FIXME, use default config once we have a lean CSS
                {
                    sourceMap: false,
                },
            ],
        ],
    };
};
