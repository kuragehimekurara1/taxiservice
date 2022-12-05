
const english = {
    settings: {
        displayName: 'English',
        code: 'en',
        direction: 'ltr',
        listStyle: 'decimal',
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    sidebar: {
        agenciesManagement: 'Agencies management',
        addNewAgency: 'Add new agency',
        editAgency: 'Edit agency',
        home: 'Home',
        messages: 'Messages',
        payments: 'Payments',
        personnel: 'Personnel',
        services: 'Services',
        settings: 'Settings',
        support: 'Support',
        trips: 'Trips',
        jobRequests: 'Job requests',
        managePersonnel: 'Manage personnel',
        inbox: 'Inbox',
        sent: 'Sent',
    },
    languageDialog: {
        title: 'Select the language you would like to use.',
        save: 'Save',
        discard: 'Discard',
    },
    userInformationDialog: {
        signOut: 'Sign out',
        emailAddress: 'Email address',
        settingsNotFound: 'Sorry,we were unable to get the information we requested from the server.',
        leaving: 'Sadly, I must say goodbye...',
        accountType: 'Account type',
        localization: 'Localization',
    },
    notification: {
        addressError: 'A short address is entered or a location on the map has not been selected.',
        agencyDuplicateError: 'There is already an agency with the same name.',
        changedLanguage: 'The language change has been applied successfully.',
        currentEmailFormatError: 'The current email format is incorrect.',
        currentPasswordFormatError: 'The current password format is incorrect.',
        darkModeDisabled: 'The dark mode has been deactivated.',
        darkModeEnabled: 'The dark mode has been activated.',
        emailNotSet: 'The email address is not set.',
        endDateError: 'During working hours, the end time must be later than the start time.',
        incorrectFormat: 'Incorrectly formatted information was entered!',
        invalidCaptchaFormat: 'The captcha format is incorrect.',
        invalidConfirmPassword: 'There is a difference between a confirm password and a password entered!',
        invalidEmailFormat: 'The email format is incorrect.',
        invalidPasswordFormat: 'The password format is incorrect.',
        invalidWorkingHoursTab: 'There is no selected day or the start time is greater than the end time.',
        localizationEmpty: 'Select a country from the list.',
        nameIsTooShort: 'Enter a name that has at least three characters!',
        newEmailFormatError: 'The new email format is incorrect.',
        newEmailSameAsCurrent: 'The current email and new email cannot be the same.',
        newPasswordFormatError: 'The new password format is incorrect.',
        newPasswordSameAsCurrent: 'The current password and new password cannot be the same.',
        passwordNotMatch: 'The new password and confirm password do not match.',
        emailNotMatch: 'The new email and confirm email do not match.',
        profilePictureEmpty: 'Please select a profile picture.',
        selectAgency: 'There is no agency selected or the agency name is empty.',
        selectCountry: 'Please select a country.',
        startDateError: 'During working hours, the start time must be earlier than the end time.',
        successfullyAddAgency: 'Well done! The agency has been created successfully by you.',
        successfullyChangePassword: 'Well done! The password has been changed successfully by you.',
        successfullyChangeEmail: 'Well done! The email has been changed successfully by you.please login again.',
        successfullyEditAgency: 'Well done! The agency has been edited successfully by you.',
        successfullyEditUser: 'Well done! The user has been edited successfully by you.',
        successfullyLogin: 'Congratulations, you have successfully logged in.',
        successfullyAcceptPersonnel: 'Well done! The personnel has been accepted successfully by you.',
        unauthenticated: 'You are not logged in!',
        currentEmailError: 'The email address you entered is not your current one.',
        chooseOnlyUnsendRequests: 'You should only select requests that have not yet been sent.',
        chooseOnlySendedRequests: 'You should only select requests that have been sent.',
        unselectedRow: 'You have not selected any row.',
        operationSuccess: 'The operation was successful.',
        jobPositionRequired: 'It is necessary to fill the job position.',
    },
    authorizedLayout: {
        loading: 'Loading...',
        redirectingToHomePage: 'Redirecting to the home page...',
    },
    components: {
        imageLoaderError: 'The image is not loaded correctly.keyword:',
        noOptionsText: 'No results found!',
        loadingText: 'Loading...',
        locations: 'Locations',
        currentLocation: 'your current geographic location:',
        requestAgain: 'Request again',
        errorLoading: 'We were unable to get the information you requested. Click on the button below to request again.',
        dataGrid: {
            noData: 'No data to display.',
            rowSelected: 'row selected',
            rowsSelected: 'rows selected',
            of: 'of',
        },

    },
    responseError: {
        CredentialsSignin: 'The username or password you entered is incorrect.',
        ERR_AGENCY_DUPLICATE: 'The agency name is already in use.',
        ERR_EMAIL_EXISTS: 'You already have an account with this email address. Please login.',
        ERR_EMAIL_NOT_FOUND: 'We couldn\'t find any users with this email address!',
        ERR_INTERNAL_UPDATE: 'A server issue is preventing the information from being edited. If you think it will help fix the problem, please contact us.',
        ERR_INVALID_CAPTCHA: 'The captcha is invalid.',
        ERR_INVALID_CODE: 'There is no request code or it is invalid!',
        ERR_INVALID_EMAIL: 'The email address is invalid.',
        ERR_INVALID_FORMAT: 'The format submitted is incorrect.',
        ERR_INVALID_METHOD: 'The method submitted is incorrect',
        ERR_INVALID_PASSWORD: 'The password is invalid.',
        ERR_INVALID_REQUEST: 'The request is invalid.',
        ERR_NULL_RESPONSE: 'The server did not provide a correct response.',
        ERR_POST_DATA: 'The data is incorrect.',
        ERR_REQUEST_EXPIRED: 'It\'s too late to submit your request.',
        ERR_SAME_EMAIL: 'The new email and current email cannot be the same.',
        ERR_SAME_PASSWORD: 'The new password and current password cannot be the same.',
        ERR_SERVER_INVALID_CAPTCHA: 'a captcha validator in server wont accept your request.',
        ERR_SERVICE_UNAVAILABLE: 'The service is unavailable.',
        ERR_TOO_MANY_REQUESTS: 'Too many requests have been sent to the server. Please try again later.',
        ERR_UNAUTHORIZED: 'You are not authorized to access this page.',
        ERR_UNAUTHORIZED_EMAIL: 'The email address you entered is not your current one.',
        ERR_UNKNOWN: 'An unknown error has occurred.',
        ERR_UNKNOWN_AUTHORIZING_USER: 'An unknown error has occurred while authorizing the user.',
        ERR_UNKNOWN_CREATING_USER: 'An unknown error has occurred while creating a user.',
        ERR_UPDATE_FAILS: 'The updating of information was interrupted by an error.',
        ERR_USER_NOT_FOUND: 'The user is not found.',
        ERR_USER_NOT_VERIFIED: 'The user is not verified.',
        HTML_ERROR_404: 'The page you are looking for does not exist.',
        UNACCEPTABLE_EMAIL: 'The new email address is unacceptable since it is already in use.',
        ERR_PERSONEL_NOT_FOUND: 'The personnel is not found.',
        
    },
    messageDialog: {
        ok: 'Ok',
        userCreatedSuccessfully: {
            title: 'Congratulations!',
            message: 'Your account has been successfully created.Please check your email to activate your account. You may find it in your spam folder (don\'t forget to check it).',
        },
        passwordReadyReset: {
            title: 'Let\'s reset!',
            message: 'You can reset your password now. An email with a reset link has been sent to you. You may find it in your spam folder (don\'t forget to check it).',
        },
    },
    advanceSettingsDialog: {
        title: 'Advance settings',
        password: 'Password',
        email: 'Email',
        updatingPassword: 'Updating password...',
        updatingEmail: 'Updating email...',
        loading: 'Loading...',
        updateAndLogin: 'Update and logout',
        emailUpdateInfo:'Warning! If you change your email, you will be logged out and you will need to login again with your new email.',
    },
    profilePictureDialog: {
        title: 'Profile picture selection',
        description: 'Choose a profile picture for your account.',
        save: 'Save',
        discard: 'Discard',
    },
    agenciesPage: {
        fetchingAgencies: 'Receiving information from the server...',
        activeAgency: 'The agency is active.',
        addressOfBusiness: 'Address of your business',
        addressWarning: 'The address should be entered accurately and completely.',
        agencyMainPhoneNumber: 'Agency Main Phone Number.',
        agencyName: 'Agency Name',
        agencySecondaryPhoneNumber: 'Agency\'s second phone number(not necessary).',
        agencySelection: 'Agency Selection',
        businessLocation: 'Find your business location:',
        editAddress: 'Edit address',
        editPhone: 'Edit phone',
        endOfWorkingHours: 'End of work hours',
        inactiveAgency: 'The agency is inactive.',
        localization: 'Localization',
        mobileNumberPlaceholder: 'Cell Phone Number',
        mobileNumberVisibility: 'Other people cannot see your mobile phone number.',
        next: 'Next',
        previous: 'Previous',
        add: 'Add',
        update: 'Update',
        phoneNumberPlaceholder1: 'Work Phone Number 1',
        phoneNumberPlaceholder2: 'Work Phone Number 2',
        phoneNumbersError: 'It is necessary to have both a work number and a mobile number! (Phone numbers must have at least 10 digits)',
        preparing: 'Preparing...',
        startOfWorkingHours: 'Start of work hours',
        title: 'Agencies management',
        workingHours: 'Working hours',
        maximumLengthOfAgencyName: 'The maximum length of the agency name is 50 characters.',
        editAgency: {
            title: 'Editing an agency',
            updating: 'Updating an agency...',
        },
        addNewAgency: {
            title: 'Adding a new agency',
            updating: 'Adding a new agency...',
        },
    },
    jobRequestsPage: {
        title: 'Job requests',
        loading: 'Loading...',
        receivingJobRequests: 'Receiving job requests...',
        agencyName: 'Agency name',
        status: 'Status',
        sent: 'Sent',
        accepted: 'Accepted',
        notSent: 'Not sent',
        reload: 'Reload',
        sendRequest: 'Send requests',
        cancelRequest: 'Cancel requests',
        sendingRequests: 'Sending requests...',
        cancelingRequests: 'Canceling requests...',
    },
    personelManagementPage: {
        title: 'Personnel management',
        receivingPersonnel: 'Receiving personnel...',
        personelList: 'Personnel list',
        jobRequests: 'Job requests',
        reload: 'Reload',
        acceptRequests: 'Accept requests',
        acceptingRequests: 'Accepting requests...',
        noPersonelSelected: 'No personnel selected!',
        jobPosition: 'Job position',
        workplace: 'Workplace',
        managementPermission: 'Management permission',
        drivingPermission: 'Driving permission',
        reportingPermission: 'Reporting permission',
        acceptRequestsPermission: 'Accept requests permission',
        activityPermission: 'Activity permission',
        activityWarning: 'The personnel cannot perform any activities without an active activity permission!',
        updatePermissions: 'Update permissions',
    },
    settingsPage: {
        title: 'Settings',
        fullName: 'Full name',
        fullNameDescription: 'Please enter your full name.',
        profilePictureDescription: 'You can change your profile picture by clicking on it.',
        advancedSettingsDescription: 'In order to change your password and email address, click on "Advanced Settings".',
        advancedSettings: 'Advanced settings',
        localization: 'Localization',
        localizationWarning: 'Localization helps to reach data more accurately, so choose it carefully please.',
        save: 'Save',
        loading: 'loading settings...',
        customer: 'Customer',
        personnel: 'Personnel',
        entrepreneur: 'Entrepreneur',
        customerAccess: 'Request a trip or view previous trips',
        personnelAccess: 'Request a job and accept the travel offer',
        entrepreneurAccess: 'Access to all agency and personnel activities',
        selectAccountType:'Select the user account type:',
    },
    inboxPage: {
        noMessages: 'No messages',
        receivingMessages: 'Receiving messages...',
        reload: 'Reload',
        title: 'Inbox',
    },
    pageNotFound: {
        title: 'Page not found!',
        error404: 'Error 404',
        message: 'Hmm...looks like you got lost or went the wrong way! Nothing to worry about, I\'ll take you home.Have a good time.',
        returnHome: 'Return home',
        redirectingToHomePage: 'Redirecting to home page...',
        imageAlt: 'map 404 not found lost',
    },
    emailVerificationPage: {
        title: 'Email Verification',
        loading: 'Verifying your account...',
        operationFail: 'The account verification process failed.',
        reason: 'Reason:',
        problems: {
            internetConnection: 'Make sure your internet connection is working.',
            emailExpired: 'The correct code will be emailed to you. (Make sure your spam folder is checked.)',
            networkChanged: 'You can resend the request by clicking the "Resend" button.',
            serverError: 'Contact the system administrator if none of the methods work.',
        },
        resend: 'Resend',
        return: 'Return',
        operationSuccess: 'Congratulations!',
        successMessage: 'Verification of the account has been completed successfully. You can now access your account and use the site\'s features.To return to the main page, click the "Return" button.',
        redirectingToHomePage: 'Redirecting to home page...',
    },
    resetPasswordPage: {
        expiredMessage: 'You have used an expired link. A new one has been emailed to you. (Make sure your spam folder is checked.)',
        loading: 'Resetting your password...',
        operationSuccess: 'Congratulations!',
        redirectingToHomePage: 'Redirecting to home page...',
        resetPassword: 'Reset Password',
        return: 'Return',
        successMessage: 'Your password has been successfully changed. You can now access your account and use the site\'s features.Click "Return" to return to the main page.',
        successToastMessage: 'The password reset process has been completed successfully.',
        title: 'Reset Password',
    },
    loginDialog: {
        title: 'Login or Register',
        loginTab: {
            title: 'Login',
            passwordHelperText: 'In order to send the password to the server, the password format must be entered correctly. We check the acceptable format before sending.',
            login: 'Login',
            resetPassword: 'Reset password',
            forgetPassword: 'if you forget your password click on "Reset password" button.',
        },
        registerTab: {
            title: 'Register',
            register: 'Register',
        },
        userInformation: {
            title: 'User Information',
            
        }
    },
    submitForm: {
        captchaHelperText: 'Captcha must be verified.',
        captchaProviderError: 'There has been an error with the captcha provider, perhaps from an internet disturbance. We recommend waiting a few seconds or reopening this dialog box if the captcha does not appear or does not work correctly.',
        confirmEmail: 'Confirm Email',
        confirmNewPassword: 'Confirm New Password',
        confirmPassword: 'Password confirmation',
        confirmPasswordHelperText: 'The password confirmation should be the same as the password entered.',
        currentEmail: 'Current Email',
        currentPassword: 'Current Password',
        currentPasswordHelperText: 'Enter your current password.',
        email: 'Email',
        emailHelperText: 'An example would be: e_mail@email.com.',
        newEmail: 'New Email',
        newPassword: 'New Password',
        password: 'Password',
        passwordHelperText: "Passwords should contain a minimum of eight characters, including at least one capital letter, one number, and one symbol. For example: 'Password_1'.",
        update: 'Update',
        confirmEmailHelperText: 'The email confirmation should be the same as the email entered.',
        currentEmailHelperText: 'Enter your current email.',

    }
};

export default english;