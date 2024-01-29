const themesNOpposites = {
  light: 'dark',
  dark: 'light',
};

const getOpstTheme = (theme) => themesNOpposites[theme.toLowerCase()];

export default getOpstTheme;
export { themesNOpposites };
