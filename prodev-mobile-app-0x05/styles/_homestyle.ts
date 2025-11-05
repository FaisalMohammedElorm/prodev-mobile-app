import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
  black: "#000",
  primary: "#FF5A5F",
  gray: "#6B7280",
  lightGray: "#F3F4F6",
  darkGray: "#374151",
};

const SPACING = {
  xs: 4,
  small: 8,
  medium: 16,
  large: 24,
  xl: 32,
};

const FONT_SIZE = {
  small: 14,
  medium: 16,
  large: 18,
  xl: 20,
};

const BORDER_RADIUS = {
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
};

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchGroup: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.large,
    marginTop: 40, // Add this to move it down
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: BORDER_RADIUS.xl,
    padding: SPACING.small,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: SPACING.medium,
  },
  searchFormText: {
    fontSize: FONT_SIZE.medium,
    fontWeight: "600",
    color: COLORS.darkGray,
    marginBottom: SPACING.xs,
  },
  searchControl: {
    fontSize: FONT_SIZE.small,
    color: COLORS.gray,
    padding: 0,
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: SPACING.medium,
    alignItems: "center",
    height: 72,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: SPACING.large,
    width: 64,
    height: 64,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: SPACING.medium,
    paddingTop: SPACING.medium,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: SPACING.large,
  },
  showMoreButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
  },
  showMoreButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
    fontWeight: "600",
  },
});