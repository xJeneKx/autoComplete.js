/**
 * Input field element
 *
 * @param {Object} config - autoCompleteJS configurations
 *
 */
export default (config) => {
  // General attributes
  config.inputField.setAttribute("dir", "ltr");
  config.inputField.setAttribute("type", "text");
  config.inputField.setAttribute("spellcheck", false);
  config.inputField.setAttribute("autocorrect", "off");
  config.inputField.setAttribute("autocomplete", "off");
  config.inputField.setAttribute("autocapitalize", "off");
  config.inputField.setAttribute("title", config.name);
  // ARIA attributes
  // config.inputField.setAttribute("role", "combobox");
  //   inputField.setAttribute("aria-labelledby", config.listId);
  // config.inputField.setAttribute("aria-owns", config.resultItem.idName);
  config.inputField.setAttribute("aria-label", config.name);
  config.inputField.setAttribute("aria-controls", config.resultsList.idName);
  config.inputField.setAttribute("aria-labelledby", config.name);
  config.inputField.setAttribute("aria-autocomplete", "both");
};
