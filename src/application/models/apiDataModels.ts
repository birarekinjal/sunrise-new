export type apiHooksValues = {
  accessPath?:string,
  apiFunction?:any,
  apiParams?:any,
  dependencyArray?:any,
  apiCallCondition?: boolean,
  defaultResponseValue ?:any,
  showErrorMessage?:boolean,
  errorMessage?:string,
  showSuccessMessage?:boolean,
  successMessage?:string,
  successCallback?: () => void;
  FailureCallback?:() => void;
};
