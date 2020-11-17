module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }],
        "eqeqeq": ["error", "smart"],
        "keyword-spacing": "error",
        "max-len": ["warn", {
            "code": 120,
            "comments": 80,
            "ignorePattern": "^\\s*import.*from.*;\\s*$", // ignore long imports
        }],
        "no-mixed-operators": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "always"],
        "prefer-destructuring": "error",
        "prefer-template": "error",
        "semi": ["error", "always"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": ["warn", 4, {
            "SwitchCase": 1,
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": ["warn", {
            "ignoreParameters": true,
        }],
        "@typescript-eslint/no-unused-vars": "warn",
    },
};
