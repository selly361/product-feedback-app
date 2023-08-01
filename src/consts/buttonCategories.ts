import { TCategory } from "types";

const buttonCategories: {
    category: TCategory
    label: string
  }[] = [
    { category: "all", label: "All" },
    { category: "ui", label: "UI" },
    { category: "ux", label: "UX" },
    { category: "enhancement", label: "Enhancement" },
    { category: "bug", label: "Bug" },
    { category: "feature", label: "Feature" },
  ];

export { buttonCategories }