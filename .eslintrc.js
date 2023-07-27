module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:prettier/recommended",
        "next/core-web-vitals"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "indent": ["error", "tab"],
        "prettier/prettier": [
            "error", {
                "endOfLine": "auto",
                "useTabs": true,
                "trailingComma": "none",
                "semi": false,
                "singleQuote": true,
                "jsxSingleQuote": true,
                "tabWidth": 4,
                "printWidth": 80
            }
        ]
    }
}
