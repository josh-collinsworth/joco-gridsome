require('jsdom-global')(undefined, { url: 'http://localhost:8080' });

global.localStorage = window.localStorage;
global.sessionStorage = window.sessionStorage;
window.Date = Date;
