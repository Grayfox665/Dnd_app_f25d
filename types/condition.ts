export interface ConditionListItem {
  index: string;
  url: string;
}

export interface ConditionCardProps {
  condition: Condition;
}

export interface Condition {
  index : string;
  name: string;
  desc: string[];
}