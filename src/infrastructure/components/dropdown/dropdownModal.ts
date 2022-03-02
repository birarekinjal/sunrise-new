export type SelectDropdownProps = {
  options?:{ name : string, value : string }[],
  multiple?:boolean,
  label?:string,
  value ?:any,
  onChange?:any,
  error :string,
  showError:boolean,
};