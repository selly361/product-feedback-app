import { ProductRequest, TSortPreference } from "types"

function sort(data: ProductRequest[], sortPreference: TSortPreference){
    let sorted: ProductRequest[];
    
    if(sortPreference === "Most Comments"){
        sorted = data.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0))
    }

    else if(sortPreference === "Least Comments"){
        sorted = data.sort((a, b) => (a.comments?.length || 0) - (b.comments?.length || 0))

    }
    
    else if(sortPreference === "Most Upvotes"){
        sorted = data.sort((a, b) => b.upvotes - a.upvotes)
    }

    else {
        sorted = data.sort((a, b) => a.upvotes - b.upvotes)
    }

    return sorted;
}


export { sort }