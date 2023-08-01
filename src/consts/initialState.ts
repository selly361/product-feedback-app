import type { InitialState } from "types";
import { categorizeProducts } from "utils/categorizeProducts";
import data from "data/data.json"
import { sort } from "utils";

const { suggestions, roadmap } = categorizeProducts(data.productRequests)


const initialState: InitialState = {
    currentUser: data.currentUser,
    suggestions,
    roadmap,
    filteredSuggestions: sort(suggestions, "Most Upvotes"),
    filterConfig: {
      sortPreference: "Most Upvotes",
      category: "all",
    },
}
export { initialState }