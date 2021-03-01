import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from './main';

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--yes': Boolean,
            '--name': String,
            '-y': '--yes'
        },
        {
            argv: rawArgs.slice(2),
        }
    );

    return {
        skipPrompts: args['--yes'] || false,
        //nameProject: args['--name'] || null,
        template: args._[0]
    };
}


async function promptForMissingOptions(options) {
    const defaultTemplate = 'MySql';
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template || defaultTemplate,
            nameProject: 'defaultProject'
        };
    }

    const questions = [];

    if(!options.nameProject){
        questions.push({
            type: 'input',
            name:'nameProject',
            message:"What´s your project name? (This will be the project folder)",
            default:'defaultProject',
            validate: function(value){
                let validarCaracteres = value.match(/^[_A-z0-9@]*((-|_)*[_A-z0-9@])*$/);
                if(validarCaracteres) return true;

                return 'Please enter a valid project name';
            }
        })
    }

    if(!options.template){
        questions.push({
            type: 'list',
            name: 'template',
            message: 'Please choose the db connection that you want to use in your backend',
            choices:['MySql','PostgreSQL'],
            default: defaultTemplate
        });
    }

   

    const asnwers = await inquirer.prompt(questions);
    return {
        ...options,
        nameProject: options.nameProject || asnwers.nameProject,
        template: options.template || asnwers.template
    }
}




export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    //console.log(options)
    await createProject(options);
}