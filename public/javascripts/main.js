document.getElementById('btnLogin').addEventListener("click", redirectToLogin, false);

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.INFO;

//
// OIDC Client Configuration
//
var clientID = document.getElementById("client_id").value;
var subdomain = document.getElementById("subdomain").value;

const ONELOGIN_CLIENT_ID = clientID;
const ONELOGIN_SUBDOMAIN = subdomain;

var settings = {
    authority: 'https://' + ONELOGIN_SUBDOMAIN + '.onelogin.com/oidc/2',
    client_id: ONELOGIN_CLIENT_ID,
    redirect_uri: window.location.origin,
    response_type: 'id_token token',
    scope: 'openid profile',

    filterProtocolClaims: true,
    loadUserInfo: true
};
var mgr = new Oidc.UserManager(settings);

//
// Redirect to OneLogin to authenticate the user
//
function redirectToLogin(e) {
  e.preventDefault();

  mgr.signinRedirect({state:'some data'}).then(function() {
      console.log("signinRedirect done");
  }).catch(function(err) {
      console.log(err);
  });
}

//
// Handle the authentication response returned
// by OneLogin after the user has attempted to authenticate
//
function processLoginResponse() {
  mgr.signinRedirectCallback().then(function(user) {

      document.getElementById("loginData").innerHTML = '<h3>Success</h3><pre><code>' + JSON.stringify(user, null, 2) + '</code></pre>';

      var redirect = window.location.origin;
      var logouthref = "https://" + subdomain + ".onelogin.com/oidc/2/logout?post_logout_redirect_uri=" + redirect + "&id_token_hint=" + user['id_token'];
      document.getElementById("logoutlink").href = logouthref;

      document.getElementById("divLogin").style.display = "none";
      document.getElementById("divLogout").style.display = "block";

  }).catch(function(err) {
      console.log(err);
      document.getElementById("divLogin").style.display = "block";
      document.getElementById("divLogout").style.display = "none";
      document.getElementById("loginData").innerHTML = '<h3>Not Successful</h3><pre><code>Error Authenticating</code></pre>';
  });
}


//
// Look out for a authentication response
// then log it and handle it
//
if (window.location.href.indexOf("#") >= 0) {
  processLoginResponse();
}
