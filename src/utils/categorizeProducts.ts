import { ProductRequest } from "types";

function categorizeProducts(productRequests: ProductRequest[]) {
    const suggestions: ProductRequest[] = [];
    const roadmap: ProductRequest[] = [];
  
    for (const product of productRequests) {
      if (["planned", "in-progress", "live"].includes(product.status)) {
        roadmap.push(product);
      } else {
        suggestions.push(product);
      }
    }
  
    return { suggestions, roadmap };
}


export { categorizeProducts }
  
  
  