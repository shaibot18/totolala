import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.js';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

/*eslint-disable no-console*/

console.log(chalk.blue('Starting minified bundle....'));

webpack(webpackConfig).run((err, stats) =>{
    if(err){
        console.log(chalk.red(err));
        return 1;
    }

    console.log(stats);
    
    return 0;
})