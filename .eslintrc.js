module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
    
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir : __dirname, 
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "quotes": ["warn", "double"],
    "react/prop-types": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": "warn",
    "indent": ["warn", 2],
    // "@typescript-eslint/interface-name-prefix": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-explicit-any": "warn",  
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "interface",
        "format": ["PascalCase"],
      }
    ]
  },
}
