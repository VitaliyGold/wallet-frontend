import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default [
	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		ignores: ["node_modules", "dist", "public"],
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat["jsx-runtime"],
	pluginPrettier,
	{
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"@typescript-eslint/no-unused-expressions": "off",
		},
	},
];
