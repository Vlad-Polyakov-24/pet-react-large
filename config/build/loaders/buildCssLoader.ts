import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildCssLoader = (isDev: boolean) => ({
	test: /\.s[ac]ss$/i,
	use: [
		{
			loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			options: {
				esModule: false,
			},
		},
		{
			loader: 'css-loader',
			options: {
				esModule: false,
				modules: {
					auto: (resPath: string) => Boolean(resPath.includes('.module.')),
					localIdentName: isDev ? '[folder][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
					exportLocalsConvention: 'dashes',
				},
			}
		},
		'sass-loader',
	],
});

export default buildCssLoader;