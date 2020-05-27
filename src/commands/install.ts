import { Command, flags } from '@oclif/command';
import { promises as fs } from 'fs';
import * as path from 'path';
import { plusx } from '../helpers/chmod';

export default class Install extends Command {
  static description = 'Install a package';

  static examples = [
    `$ dpm install`,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'package',
      required: true,
    },
  ];

  async run() {
    const { args } = this.parse(Install);

    await fs.writeFile(
      args.package,
      `docker run --rm -i --name=${ args.package } -w /app -v $PWD:/app ${ args.package } "$@"`,
    );
    await plusx(args.package);
    await fs.rename(path.resolve(__dirname, args.package), path.resolve('/usr/local/bin', args.package));
  }
}
