import { getContent } from './getAuthenticationTpl'

export default function () {
  $("body").on('click', 
    `.v--modal [data-link-action="display-register-form"],
    .v--modal .lost_password a,
    .v--modal .go-login-page a`, (event) => {
    event.preventDefault();
    // console.log(event.target)
    getContent.call(this, event.target.href);
  });
}