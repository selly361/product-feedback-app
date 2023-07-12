import { categorizeProducts, sort } from "utils";

import type { InitialState } from "types";
import data from "data/data.json"

const initialState: InitialState = {
    currentUser: data.currentUser,
    suggestions: [],
    roadmap: [],
    filteredSuggestions: [],
    filterConfig: {
      sortPreference: "Most Upvotes",
      category: "all",
    },
}

const { suggestions, roadmap } = categorizeProducts(data.productRequests)

initialState.suggestions = suggestions
initialState.roadmap = roadmap


initialState.filteredSuggestions = sort(initialState.suggestions, initialState.filterConfig.sortPreference)

export { initialState }