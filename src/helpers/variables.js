/**
 * @name: Variables
 * @desc: Contains color scheme and default variables
 * for styling. Updating this will cause the styles
 * such as color or font to change.
 *
 * @flow
 */
import RULES from './config.json';

// /**
//  * Update Rules
//  */
// export const updateRules = (rulesObj: Object) => {
//   console.log('New Rules:', rulesObj);
//   // eslint-disable-next-line
//   if (rulesObj.hasOwnProperty('scheme')) {
//     Object.keys(rulesObj.scheme).map((key) => {
//       RULES.scheme[key] = rulesObj.scheme[key];
//       const serializedJSON = JSON.stringify(RULES, null, 2);
//       fs.writeFile(`${__dirname}/config.json`, serializedJSON);
//       return true;
//     });
//   } else if (rulesObj.hasOwnProperty('styles')) { // eslint-disable-line
//     Object.keys(rulesObj.styles).map((key) => {
//       RULES.styles[key] = rulesObj.styles[key];
//       const serializedJSON = JSON.stringify(RULES, null, 2);
//       fs.writeFile(`${__dirname}/config.json`, serializedJSON);
//       return true;
//     });
//   }
// };
