import { InitialState } from "types"
import { sort } from "utils"

const filter = (state: InitialState) => {
    const { suggestions, filterConfig } = state
    const { sortPreference, category } = filterConfig
  
    if (category === "all") {
      state.filteredSuggestions = sort(suggestions, sortPreference)
    } else {
      const filtered = suggestions.filter((product) => product.category === category)
      state.filteredSuggestions = sort(filtered, sortPreference)
    }
}


export { filter }