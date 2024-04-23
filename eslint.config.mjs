import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
	...compat.extends('xo-typescript'),
	pluginReactConfig,
	{
		languageOptions: { globals: globals.browser },
		rules: {
			'object-curly-spacing': ['error', 'always'],
			indent: [2, 'tab'],
			'react/jsx-indent': [2, 'tab'],
			'react/jsx-indent-props': [2, 'tab'],
			'react/react-in-jsx-scope': 0,
			'@typescript-eslint/indent': [2, 'tab'],
			'@typescript-eslint/object-curly-spacing': ['error', 'always'],
			'@typescript-eslint/prefer-nullish-coalescing': 0,
			'@typescript-eslint/no-unsafe-argument': 0,
			'@typescript-eslint/no-unsafe-assignment': 0,
			'@typescript-eslint/naming-convention': [
				1,
				{
					selector: 'variable',
					format: ['strictCamelCase', 'camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
					leadingUnderscore: 'allowSingleOrDouble',
					trailingUnderscore: 'allowSingleOrDouble',
				},
			],
			'max-len': [2, { ignoreComments: true }],
		},
	},
];