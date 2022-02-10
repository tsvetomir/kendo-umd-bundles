import { readFileSync, writeFileSync } from 'fs';
import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const kendoPackages = JSON.parse(readFileSync('./config/kendo-packages.json'));
const globals = {
  ...JSON.parse(readFileSync('./config/globals.json')),
  ...kendoPackages.reduce((acc, pkg) => {
    acc[pkg.name] = pkg.exportAs;
    return acc;
  }, {})
};

function rollupConfig(pkg) {
  return {
    input: `./node_modules/${pkg.name}/dist/es/index.js`,
    output: {
      file: `./dist/bundles/${pkg.name.substring(pkg.name.indexOf('/') + 1)}.js`,
      format: 'umd',
      name: pkg.exportAs,
      globals
    },
    plugins: [
      resolve(),
      uglify()
    ],
    external: Object.keys(globals)
  }
}

console.info('Generating UMD bundles for Kendo UI for Angular...\n');
console.info('Writing ./dist/webpack-externals.json');
writeFileSync('./dist/webpack-externals.json', JSON.stringify(globals, null, 2));
build();

async function build() {
  const targets = kendoPackages
    .filter(pkg => pkg.name.startsWith('@progress/kendo-angular-'))
    .map(pkg => rollupConfig(pkg));

  for (let i = 0; i < targets.length; i++) {
    const config = targets[i];
    console.log(`Writing ${config.output.file}`);
    const bundle = await rollup(config);
    await bundle.write(config.output);
    await bundle.close();
  }
}
