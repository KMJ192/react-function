type Props = {
  auth: string;
  pageAuth: string;
  wrongAccessPage: JSX.Element;
  page: JSX.Element;
};

function Authentication({
  auth,
  pageAuth,
  page,
  wrongAccessPage,
}: Props): [JSX.Element, boolean] {
  if (pageAuth !== 'common' && auth !== pageAuth) {
    return [wrongAccessPage, true];
  }

  return [page, false];
}

export default Authentication;
