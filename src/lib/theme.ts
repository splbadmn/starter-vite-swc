// Theme configuration file

// Main theme colors
export const themeColors = {
  primary: "#B91C1C", // Royal red (red-700)
  primaryHover: "#991B1B", // Darker red (red-800)
  primaryLight: "#FEE2E2", // Light red (red-100)
  secondary: "#1F2937", // Gray-800
  accent: "#F3F4F6", // Gray-100
  background: "#FFFFFF", // White
  text: "#111827", // Gray-900
  textLight: "#6B7280", // Gray-500
};

// Export theme variables for use throughout the application
export const theme = {
  colors: themeColors,
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};
