export const options = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const roles = [
  { name: 'Admin', value: 1 },
  { name: 'KYC', value: 2 },
  { name: 'User', value: 3 },
];

export const permission = [
  { name: 'Admin', value: 1 },
  { name: 'KYC', value: 2 },
  { name: 'User', value: 3 },
];


export const constants = {
  loginPage: {
    title: 'Account Login',
    welcomeMessage: 'Welcome back',
    information: 'To keep connected with us please login with your personal information by email address & password.',
    emailPlaceholder: 'Email Address',
    emailLabel:'Email',
    passwordPlaceholder: 'Password',
    passwordLabel:'Password',
    rememberMePlaceholder: 'Remember Me',
    forgotPassword: 'forgot Password',
    buttons: {
      login: 'Login',
    },
  },
  resetPassword: {
    heading: 'Reset Password',
    title: 'Enter your new password for reset new password.',
    NewPasswordPlaceholder: 'Enter New Password Here...',
    NewLabel: 'New Password',
    confirmPasswordPlaceholder: 'Enter Confirm Password Here...',
    confirmLabel: 'Confirm Password',
    backToLogin: 'Back To Login',
  },
  forgotPassword: {
    heading: 'Forgot Password',
    title: 'Enter your email address so we will verify your email id and send you otp number.',
    emailPlaceholder: 'Enter Email here..',
    emailLabel: 'Email',
    backToLogin: 'Back To Login',
  },
  addNewUser: {
    firstNamePlaceholder: 'Enter First Name Here...',
    firstNameLabel: 'First Name',
    lastNamePlaceholder: 'Enter LastName Here...',
    lastNameLabel: 'LastName',
    ifscCodePlaceholder: 'Enter IFSCCode Here...',
    ifscLabel: 'IFSC Code',
    emailPlaceholder: 'Enter Email Here...',
    emailLabel: 'Email',
    mobileNumberPlaceholder: 'Enter Mobile No Here...',
    mobileNumberLabel: 'Mobile No',
    bankNamePlaceholder: 'Enter Bank Name Here...',
    bankNameLabel: 'Bank Name',
    addressPlaceholder: 'Enter Address Here...',
    addressLabel: 'Address',
    branchNamePlaceholder: 'Enter Branch Name Here...',
    branchNameLabel: 'Branch_Name',
    pinCodePlaceholder: 'Enter Pincode Here...',
    pinCodeLabel: 'Pincode',
    cityNamePlaceholder: 'Enter City Name Here...',
    cityLabel: 'City',
    stateLabel: 'Select State',
    countryLabel: 'Select Country',
    accountPlaceholder: 'Enter Account Number Here...',
    accountLabel: 'Account Number',
    designationPlaceholder: 'Enter Designation Here...',
    designationLabel: 'Branch Name',
    secretaryLabel: 'Select Secretary',
    accountNumberPlaceholder: 'Enter Confirm Account Number Here...',
    accountNumberLabel: 'Confirm Account Number',
    buttons: {
      submit: 'submit',
    },
  },
  createUser: {
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    role: 'choose role',
    permissions: 'choose permission',
    buttons: {
      submit: 'submit',
    },
  },
  profile:{
    manageProfile:'Manage Profile',
    changePassword:'Change Password',
  },
  notifications: {
    user:'User Created account at Tntra',
    notification:' Notification is Created from Botree technologies',
  },
  searchBar: {
    searchPlaceholder:'Search',
  },
  
};