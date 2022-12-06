export const APP_PAGES = {
  APP: {
    HOME: "HOME",
    RESULT_SCREEN: "RESULT_SCREEN"
  }
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICONS = {
  HOME: (
    <Ionicons name="ios-home-outline" style={{ color: "#333", fontSize: 25 }} />
  ),
  BOOKMARK: (
    <Ionicons
      name="ios-bookmark-outline"
      style={{ color: "#404040", fontSize: 27 }}
    />
  ),
  BACK: (
    <Ionicons
      name="ios-chevron-back"
      style={{ color: "#ffff", fontSize: 20 }}
    />
  ),
  RIGHT: (
    <Ionicons
      name="ios-chevron-forward"
      style={{ color: "#fff", fontSize: 20 }}
    />
  ),
  SEARCH: (
    <Ionicons
      name="ios-search-outline"
      style={{ color: "#404040", fontSize: 27 }}
    />
  ),
  DISCOVER: (
    <Ionicons
      name="ios-compass-outline"
      style={{ color: "#404040", fontSize: 27 }}
    />
  ),
  CATEGORIES: (
    <Ionicons
      name="ios-albums-outline"
      style={{ color: "#404040", fontSize: 27 }}
    />
  )
};
