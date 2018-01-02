export function getRequestParameter(paramName) {
    let vars = {};
    window.location.href.replace(location.hash, '').replace(
      /[?&]+([^=&]+)=?([^&]*)?/gi,
      function (m, key, value) {
        vars[key] = value !== undefined ? value : '';
      }
    );
    if (paramName !== undefined) {
      return vars[paramName] ? vars[paramName] : null;
    }
  
    return vars;
}