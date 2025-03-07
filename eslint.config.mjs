import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin-js';


/** @type {import('eslint').Linter.Config[]} */
export default [
	{files: ['**/*.js'], languageOptions: {sourceType: 'script'}},
	{languageOptions: {globals: globals.browser}},
	{
		plugins: {'@stylistic': stylistic},
		rules: {
			'@stylistic/object-curly-spacing': ['error', 'never'],
			'@stylistic/comma-spacing': ['error', {'before': false, 'after': true}],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/comma-dangle': ['error', 'never']
		}}
];
