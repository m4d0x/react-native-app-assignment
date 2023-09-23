interface CustomTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    disabled: string;
    card: string;
    border: string;
    notification: string;
    // ... more color properties
  };
  // ... more theme styles
}

export const lightTheme: CustomTheme = {
  colors: {
    primary: '#007aff', // blue
    secondary: '#ff3b30', // red
    background: '#f5f5f5', // light gray
    text: '#333333', // dark gray
    success: '#28a745', // green
    warning: '#ffc107', // yellow
    danger: '#dc3545', // red
    info: '#17a2b8', // teal
    disabled: '#dcdcdc', // light gray
    card: '#ffffff', // white
    border: '#cccccc', // light gray
    notification: '#ff0000', // red
    // ... more light theme styles
  },
  // ... more light theme styles
};

export const darkTheme: CustomTheme = {
  colors: {
    primary: '#0a84ff', // blue
    secondary: '#ff453a', // red
    background: '#222222', // dark gray
    text: '#f5f5f5', // light gray
    success: '#3ddc84', // green
    warning: '#ffcc00', // yellow
    danger: '#ff2d55', // red
    info: '#5ac8fa', // teal
    disabled: '#3c3c3c', // dark gray
    card: '#333333', // dark gray
    border: '#555555', // gray
    notification: '#ff0000', // red
    // ... more dark theme styles
  },
  // ... more dark theme styles
};
