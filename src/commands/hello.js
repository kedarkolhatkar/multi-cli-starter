const { Command, flags } = require('@oclif/command');
const sayHello = require('../command-impl/hello-impl');

class HelloCommand extends Command {
    async run() {
        const { flags } = this.parse(HelloCommand);
        const name = flags.name || 'world';
        // this.log(`hello ${name} from ./src/commands/hello.js`);
        await sayHello(name);
    }
}

HelloCommand.description = `Says hello to you
...
Extra documentation goes here
`;

HelloCommand.flags = {
    name: flags.string({ char: 'n', description: 'name to print' }),
};

module.exports = HelloCommand;