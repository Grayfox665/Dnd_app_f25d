export interface RuleSectionListItem {
  name: string;
  index: string;
  url : string;
}

export interface RuleSectionCardProps {
  rulesection : RuleSection;
}

export interface RuleSection {
  name: string;
  index: string;
  desc: string;
}

export type RuleSectionIndexesResponse = {
  count : number;
  results: RuleSectionListItem[];
}