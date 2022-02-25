export type menuItemProps = {
  name?: string ;
  url?: string ;
  id?:number | undefined;
  children?: {
    name: string, url: string, id?:number | undefined;
  }
}[];

export type nestedChildrenProps = {
  name: string, url: string, id?:number | undefined;
}[];
