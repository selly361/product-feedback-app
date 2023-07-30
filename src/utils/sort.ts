import { ProductRequest, TSortPreference } from "types";

import { numberOfComments } from "utils";

function sort(data: ProductRequest[], sortPreference: TSortPreference) {
  let sorted: ProductRequest[];

  if (sortPreference === "Most Comments") {
    sorted = data.sort(
      (a, b) => numberOfComments(b?.comments) - numberOfComments(a?.comments)
    );
  } else if (sortPreference === "Least Comments") {
    sorted = data.sort(
      (a, b) => numberOfComments(a?.comments) - numberOfComments(b?.comments)
    );
  } else if (sortPreference === "Most Upvotes") {
    sorted = data.sort((a, b) => b.upvotes - a.upvotes);
  } else {
    sorted = data.sort((a, b) => a.upvotes - b.upvotes);
  }

  return sorted;
}

export { sort };
