import React from "react";
import App from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        <style>{`
          @media (max-width: 30em) {
            .medium.screen.only {
              display: none !important;
            }
          }

          .swagger-ui .topbar {
            display: none;
          }

          .ui.text.container {
            padding-top: 4em;
            padding-bottom: 4em;
          }

          /* Override SemanticUI default for improved a11y - contrast 4.5 */
          a {
            color: #3A73C0
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
