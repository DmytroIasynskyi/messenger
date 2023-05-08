module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/jsx-uses-vars": "warn",
        "react/jsx-uses-react": "warn",
        "max-len": 0,
        "no-unused-vars": [1, {"vars": "all", "args": "after-used"}]
    }
}
