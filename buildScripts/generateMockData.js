import jsf from 'json-schema-faker';
import fs from 'fs';
import {schema} from './mockDataSchema.js';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

/*eslint-disable no-console*/
fs.writeFile('./src/api/db.json',json,(err)=>{
    if(err){
        console.log(chalk.red(err));
    }
    else{
        console.log(chalk.green('Fake data generated'));
    }
})
