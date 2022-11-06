const helmet = require('helmet')
var ninetyDaysInSeconds = 90*24*60*60; 

 
app.use(helmet.hidePoweredBy()); 
app.use(helmet.frameguard({action: 'deny'}));
 app.use(helmet.xssFilter({}));
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
//HTTP Strict Transport Security 
app.use(helmet.hsts({ maxAge: ninetyDaysInSeconds, force: true }));
//To improve performance
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"] }} ));
