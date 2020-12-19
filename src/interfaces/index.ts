export interface OptionItem {
    label: string;
    value: string;
    isSelected?: boolean;
}
export interface ChipsProp {
    items: OptionItem[];
    onClickRemove: (value: string) => void; 
 }

 export interface MultiSelectProp {
    label: string;
    items: OptionItem[],
    
    onChange: (value:number) => void;
  }