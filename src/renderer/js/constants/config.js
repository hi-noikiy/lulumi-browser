import path from 'path';

const lulumiRootPath = path.resolve(__dirname, '../');
const lulumiHelperPath = path.resolve(lulumiRootPath, './helper');

const searchEngine = [
  {
    name: 'Google',
    search: 'https://www.google.com/search?q=',
    autocomplete: 'https://suggestqueries.google.com/complete/search?client=youtube&q=',
  },
  {
    name: 'Bing',
    search: 'https://www.bing.com/search?q=',
    autocomplete: 'https://api.bing.com/osjson.aspx?query=',
  },
];

const homepage = 'https://github.com/qazbnm456/lulumi-browser';
const pdfViewer = 'pdf-viewer';

const tabConfig = {
  defaultUrl: 'https://github.com/qazbnm456/lulumi-browser',
  defaultFavicon: 'https://github.com/favicon.ico',
};

export default {
  lulumiPagesCustomProtocol: 'lulumi://',
  tabConfig,
  aboutPages: {
    about: 'List of about pages',
  },
  searchEngine,
  currentSearchEngine: searchEngine[0],
  homepage,
  pdfViewer,
  lulumiPagesPath: `${lulumiHelperPath}/pages/`,
  lulumiPDFJSPath: `${lulumiHelperPath}/pdfjs/`,
  lulumiHelperPath,
  lulumiRootPath,
  devUserData: `${lulumiRootPath}/userData/`,
  lulumiRev: 'ab1e354f4bff67f676e0ecf8aa12ea4a907f51f2',
};
