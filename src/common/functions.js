export function getParamFromUrl(param) {
  return new URLSearchParams(window.location.search).get(param);
}
