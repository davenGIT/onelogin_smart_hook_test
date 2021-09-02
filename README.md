# onelogin_smart_hook_test

# Taken from OneLogin OpenId Connect Implicit Flow Sample

Much of this authentication code was taken from or modified from OneLogin's sample application

*** OneLogin's Implicit Flow Sample Application README.md *** 

This sample app demonstrates how to authenticate users in single page apps
and does not require any server side code.

Note: Implicit flow is no longer recommended. Best practice is to use Auth Code Flow + PKCE.

The sample makes use of a pure [Javascript OpenId Connect Client](https://github.com/IdentityModel/oidc-client-js). We have included a minified
version of this client in `public/javascripts/oidc-client.min.js` or you can
fetch the [latest version here](https://github.com/IdentityModel/oidc-client-js/tree/dev/dist).

We have kept this sample to minimum functionality. However the UserManager in OIDC Client
library has many useful features for authenticating via popups, logging out, and
getting user info. Check out the [wiki](https://github.com/IdentityModel/oidc-client-js/wiki) and [samples](https://github.com/IdentityModel/oidc-client-js/tree/dev/sample/public) in the Github repo.

*** End of OneLogin's Implicit Flow Sample Application README.md *** 



## Run
This sample application uses nodemon. I love this node addon. I only found out about nodemon recently but now I can't do without it. Nodemon monitors the project and eac time you edit one of your code files or json files, nodemon re-starts the application. Even if you app falls over completely, edit and watch it start up again.

So changes have been made to the package.json file to facilitate this. When you run the install line below, nodemon is installed.

From the command line run
```
> npm install
> npm run dev
```

*** OneLogin's Implicit Flow Sample Application README.md *** 

### Local testing
By default these samples will run on `http://localhost:3000`.

You will need to add your callback url to the list of approved **Redirect URIs** for your OneLogin OIDC app via the Admin portal. e.g. `http://localhost:3000`

*** End of OneLogin's Implicit Flow Sample Application README.md *** 

