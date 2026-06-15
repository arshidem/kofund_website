// Light Theme Colors
export const lightColors = {
  primary: "#00BFA6",
  primaryGradientStart: "#00C6A2",
  primaryGradientEnd: "#00E3C3",
  background: "#F8F9FA",
  card: "#FFFFFF",
  surface: "#FDFDFD",
  border: "#E9ECEF",
  textPrimary: "#1A2E2A",
  textSecondary: "#5F6B6B",
  textTertiary: "#8A9A9A",
  textCards: "#052224",
  revenue: "#00BFA6",
  expense: "#FF6B6B",
  balance: "#2196F3",
  success: "#00BFA6",
  error: "#F44336",
  warning: "#FFB300",
  info: "#2196F3",
  progressBackground: "#E8F5F2",
  progressFill: "#00BFA6",
} as const;

// Dark Theme Colors
export const darkColors = {
  primary: "#00E3C3",
  primaryGradientStart: "#1D2329",
  primaryGradientEnd: "#0B0E11",
  background: "#0B0E11",
  card: "#151A1F",
  surface: "#1D2329",
  border: "#262D35",
  textPrimary: "#E0F2EF",
  textSecondary: "#9EB6B4",
  textTertiary: "#6B8A87",
  textCards: "#F1FFF3",
  revenue: "#00E3C3",
  expense: "#FF8A8A",
  balance: "#4FC3F7",
  success: "#00E3C3",
  error: "#FF6B6B",
  warning: "#FFCA28",
  info: "#4FC3F7",
  progressBackground: "#1A2E2A",
  progressFill: "#00E3C3",
} as const;

// Type for theme colors
export type ThemeColors = typeof lightColors;

// Helper function to get current theme colors
export const getThemeColors = (isDark: boolean): ThemeColors => {
  return isDark ? darkColors : lightColors;
};