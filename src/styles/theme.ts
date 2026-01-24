export const fonts = {
    alphabet: "'Plus Jakarta Sans', sans-serif",
    chineseCharacterKanji: "'Source Han Sans', sans-serif",
};

export const fontSizes = {
    secondary: "1.25rem",
    body: "1.5rem",
    subtitle: "2.5rem",
    slogan: "3rem",
    name: "3.75rem",
    title: "6.25rem",
};

export interface ThemeColors {
    primary: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    neon: string;
}

export const colors = {
    primary: "var(--color-primary)", //"#E20095",
    primaryLight: "var(--color-primary-light)", //"#FF64C4",
    secondary: "var(--color-secondary)", //"#001FFF",
    secondaryLight: "var(--color-secondary-light)", //"#00B7FF",
    neon: "var(--color-neon)", //"#66FFFF",
    white: "#FFFFFF",
};

export const DEFAULT_COLOR: ThemeColors = {
    primary: "#E20095",
    primaryLight: "#FF64C4",
    secondary: "#001FFF",
    secondaryLight: "#00B7FF",
    neon: "#66FFFF",
};