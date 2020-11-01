module.exports = {
	outputDir : './build',
	productionSourceMap: false,
  	publicPath: process.env.NODE_ENV === 'production'
    	? '/teste-maeztra/'
    	: '/'
}
