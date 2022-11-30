// import blacklist from "metro-config/src/defaults/exclusionList"

// export const resolver = {
//     blacklistRE: blacklist([/amplify\/#current-cloud-backend\/.*/]),
// }
// export const transformer = {
//     getTransformOptions: async () => ({
//         transform: {
//             experimentalImportSupport: false,
//             inlineRequires: false,
//         },
//     }),
// }
const blacklist = require('metro-config/src/defaults/exclusionList');
module.exports = {
 resolver: {
    blacklistRE: blacklist([
        // /amplify\/.*/,
        /amplify\/#current-cloud-backend\/.*/,
    ])
 },
};