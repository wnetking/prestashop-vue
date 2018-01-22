import { getContent } from "./getAuthenticationTpl";

export default function() {
  $("body").on(
    "click",
    `.v--modal [data-link-action="display-register-form"],
    .v--modal .lost_password a,
    .v--modal .go-login-page a`,
    event => {
      event.preventDefault();
      getContent.call(this, event.target.href);
    }
  );

  $("body").on(
    "submit",
    `.v--modal #login-form,
    .v--modal #customer-form`,
    event => {
      event.preventDefault();
      let query = $(event.target).serialize();

      this.$nextTick(function() {
        this.themeLoaderShow = true;
      });

      $.post(event.target.action, query, null).then(resp => {
        if (
          $(resp)
            .find("#header")
            .html()
            .trim() === ""
        ) {
          this.$nextTick(function() {});

          this.$nextTick(function() {
            this.themeLoaderShow = false;
            this.modules.singIn = $(resp)
              .find("#content")
              .html();
          });
        } else {
          this.$nextTick(function() {
            this.themeLoaderShow = false;
          });
          location.reload();
        }
      });
    }
  );
}
