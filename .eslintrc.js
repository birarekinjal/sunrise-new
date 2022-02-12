module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', "import", '@typescript-eslint',],
  parserOptions: {
    "requireConfigFile": false,
    "ecmaVersion": 6,
    "project": './tsconfig.json',
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "babelOptions": {
      "presets": ["@babel/preset-react"],
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-use-before-define': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["error"],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'max-len': ['error', { code: 220 }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unused-state': 'off',
    'import/no-cycle': 'off',
    'no-shadow': 'off',
    'no-console': 'error',
    'max-len': ['error', { code: 250 }],
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'global-require': 'off',
    'no-useless-concat': 'off',
    'react/no-did-update-set-state': 'off',
    'react-hooks/exhaustive-deps': 'off',
    eqeqeq: 'off',
    // 'no-undef': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-script-url': 'off',
    'react/jsx-indent': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-closing-tag-location': 'off',
    'no-trailing-spaces': 'off',
    indent: 'off',
    'padded-blocks': 'off',
    'no-useless-escape': 'off',
    'react/no-array-index-key': 'off',
    'no-else-return': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase"]
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "enumMember",
        "format": ["camelCase", "UPPER_CASE"]
      }
    ]
  },
};
