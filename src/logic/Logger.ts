const l = window.console;
if (process.env.NODE_ENV === 'production') {
  l.debug = () => null;
} else {
  l.debug(
    '%cDevelopment mode - debug logging enabled',
    'color: darkblue; font-weight: bold'
  );
}
export default l;
