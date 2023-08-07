export interface IDropDownProps {
    set: (arg: string) => void;
    current: string
    type: "category" | "status"
}