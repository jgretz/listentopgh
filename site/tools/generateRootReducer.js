/* eslint-disable no-console */
import _ from 'lodash';
import dir from 'node-dir';
import fs from 'fs';
import path from 'path';

dir.subdirs(path.resolve(__dirname, '../app/features'), (err1, directoryPaths) => {
  if (err1) throw err1;

  const features = _.reduce(directoryPaths, (result, directoryPath) => {
    const matches = directoryPath.match(/features(?:\/|\\)(.+?)(?:\/|\\)reducers$/);
    if (!matches) return result;

    return [...result, matches[1]];
  }, []);
  features.sort();

  const featuresJs = features.length === 0 ? [] : [
    '  features: combineReducers({',
    ...features.map(feature => `    ${feature},`),
    '  }),',
  ];

  const rootReducerContents = [
    '/* eslint-disable sort-imports */',
    'import {combineReducers} from \'redux\';',
    'import {routerReducer} from \'react-router-redux\';',
    ...features.map(feature => `import ${feature} from './features/${feature}/reducers';`),

    '\nconst rootReducer = combineReducers({',
    ...featuresJs,
    '  routing: routerReducer,',
    '});\n',

    'export default rootReducer;\n',
  ].join('\n');

  fs.writeFile(path.resolve(__dirname, '../app/rootReducer.js'), rootReducerContents, err2 => {
    if (err2) throw err2;
  });
});
