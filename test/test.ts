// Configuration for vscode-debug only.
import * as glob from 'glob';
// tslint:disable-next-line:no-import-side-effect
import 'jasmine';
import { join, relative } from 'path';

const projectBaseDir = join(__dirname, '../..');
require('source-map-support').install({
  hookRequire: true,
});

const Jasmine = require('jasmine');
const runner = new Jasmine({ projectBaseDir });

const files = `test/usePathMappingRule.spec.ts`;

const tests = glob.sync(files).map(p => relative(projectBaseDir, p));

runner.execute(tests);
