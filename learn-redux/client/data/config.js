import Raven from 'raven-js';

const sentry_key = 'f3c8bc44da4240189d167301dec3826d';
const sentry_app = '5507580';
export const sentry_url = `https://${sentry_key}@o473074.ingest.sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
