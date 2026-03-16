export interface DropdownOptions {
  label: string;
  value: string;
}

export interface DropdownProps {
  options : DropdownOptions[];
  selected : string;
  onSelect : (value: string) => void;
} 