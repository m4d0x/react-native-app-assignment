module.exports = {
  root: true,
  extends: [
    "universe/native",
    "plugin:react-hooks/recommended",
    "universe/shared/typescript-analysis",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
