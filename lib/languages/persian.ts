
const persian = {
    settings: {
        displayName: 'فارسی',
        code: 'fa',
        direction: 'rtl',
        listStyle: 'arabic-indic',
        days: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
    },
    sidebar: {
        agenciesManagement: 'مدیریت آژانس ها',
        addNewAgency: 'افزودن آژانس جدید',
        editAgency: 'ویرایش آژانس',
        home: 'خونه',
        messages: 'پیام ها',
        payments: 'پرداخت ها',
        personnel: 'پرسنل',
        services: 'سرویس ها',
        settings: 'تنظیمات',
        support: 'پشتیبانی',
        trips: 'سفرها',
        jobRequests: 'درخواست های شغلی',
        managePersonnel: 'مدیریت پرسنل',
    },
    languageDialog: {
        title: 'زبانی را که می خواهید استفاده کنید انتخاب کنید.',
        save: 'ذخیره',
        discard: 'بی خیال',
    },
    userInformationDialog: {
        signOut: 'خروج',
        emailAddress: 'آدرس ایمیل',
        settingsNotFound: 'متأسفیم، نتوانستیم اطلاعاتی را که از سرور درخواست کرده بودیم دریافت کنیم.',
        leaving: 'متاسفانه باید خداحافظی کنم...',
        accountType: 'نوع حساب',
        localization: 'محلی سازی',
    },
    notification: {
        addressError: 'آدرس کوتاهی وارد شده است یا مکانی روی نقشه انتخاب نشده است.',
        agencyDuplicateError: 'در حال حاضر آژانسی با همین نام وجود دارد.',
        changedLanguage: 'تغییر زبان با موفقیت اعمال شد.',
        currentPasswordFormatError: 'فرمت رمز عبور فعلی نادرست است.',
        currentEmailFormatError: 'فرمت ایمیل فعلی نادرست است.',
        darkModeDisabled: 'حالت تاریک غیرفعال شده است.',
        darkModeEnabled: 'حالت تاریک فعال شده است.',
        emailNotSet: 'ایمیلی برای این کاربر تنظیم نشده است.',
        endDateError: 'در ساعات کاری، زمان پایان باید بعدتر از زمان شروع باشد.',
        incorrectFormat: 'اطلاعات با فرمت اشتباه وارد شد!',
        invalidCaptchaFormat: 'فرمت کپچا نادرست است.',
        invalidConfirmPassword: 'بین تایید رمز عبور و رمز عبور وارد شده تفاوت وجود دارد!',
        invalidEmailFormat: 'فرمت ایمیل نادرست است.',
        invalidPasswordFormat: 'فرمت رمز عبور نادرست است.',
        invalidWorkingHoursTab: 'هیچ روز انتخابی وجود ندارد یا زمان شروع بیشتر از زمان پایان است.',
        localizationEmpty: 'یک کشور را از لیست انتخاب کنید.',
        nameIsTooShort: 'نامی را وارد کنید که حداقل سه کاراکتر داشته باشد!',
        newPasswordFormatError: 'فرمت رمز عبور جدید نادرست است.',
        newEmailFormatError: 'فرمت ایمیل جدید نادرست است.',
        newPasswordSameAsCurrent: 'رمز عبور جدید نباید با رمز عبور فعلی یکسان باشد.',
        newEmailSameAsCurrent: 'ایمیل جدید نباید با ایمیل فعلی یکسان باشد.',
        passwordNotMatch: 'رمز عبور جدید با تایید رمز عبور یکسان نیست.',
        emailNotMatch: 'ایمیل جدید با تایید ایمیل یکسان نیست.',
        profilePictureEmpty: 'لطفا یک عکس پروفایل انتخاب کنید.',
        selectAgency: 'هیچ آژانسی انتخاب نشده است یا نام آژانس خالی است.',
        selectCountry: 'لطفا یک کشور انتخاب کنید.',
        startDateError: 'در ساعات کاری، زمان شروع باید زودتر از زمان پایان باشد.',
        successfullyAddAgency: 'آفرین! آژانس با موفقیت توسط شما ایجاد شده است.',
        successfullyChangePassword:'آفرین! رمز عبور با موفقیت توسط شما تغییر کرد.',
        successfullyEditAgency: 'آفرین! آژانس با موفقیت توسط شما ویرایش شده است.',
        successfullyEditUser: 'آفرین! کاربر با موفقیت توسط شما ویرایش شده است.',
        successfullyLogin: 'تبریک می گویم، شما با موفقیت وارد سیستم شدید.',
        successfullyChangeEmail: 'آفرین! ایمیل با موفقیت توسط شما تغییر کرد.لطفا دوباره وارد سیستم شوید.',
        unauthenticated: 'شما وارد سیستم نشده اید!',
        currentEmailError: 'آدرس ایمیلی که وارد کردید آدرس فعلی شما نیست.',

    },
    authorizedLayout: {
        loading: 'در حال بارگذاری...',
        redirectingToHomePage: 'در حال تغییر به صفحه اصلی...',
    },
    components: {
        imageLoaderError: 'تصویر بارگذاری نشد.کلمات کلیدی:',
        noOptionsText: 'نتیجه ای یافت نشد!',
        loadingText: 'در حال بارگذاری...',
        locations: 'مکان ها',
        currentLocation: 'موقعیت فعلی جغرافیایی شما:',
        requestAgain: 'درخواست مجدد',
        errorLoading: 'ما نتوانستیم اطلاعات درخواستی شما را دریافت کنیم. برای درخواست مجدد روی دکمه زیر کلیک کنید.',
        dataGrid: {
            noData: 'اطلاعاتی برای نمایش وجود ندارد.',
            rowSelected: 'ردیف انتخاب شده',
            rowsSelected: 'ردیف انتخاب شده',
            of: 'از',
        },

    },
    responseError: {
        CredentialsSignin: 'نام کاربری یا رمز عبور وارد شده اشتباه است.',
        ERR_AGENCY_DUPLICATE: 'آژانسی با این نام وجود دارد.',
        ERR_EMAIL_EXISTS: 'شما قبلاً یک حساب کاربری با این آدرس ایمیل دارید. لطفا وارد شوید.',
        ERR_EMAIL_NOT_FOUND: 'هیچ کاربری با این آدرس ایمیل پیدا نکردیم!',
        ERR_INTERNAL_UPDATE: 'یک مشکل سرور مانع از ویرایش اطلاعات می‌شود. اگر فکر می کنید به رفع مشکل کمک می کند، لطفاً با ما تماس بگیرید.',
        ERR_INVALID_CAPTCHA: 'کپچا نامعتبر است.',
        ERR_INVALID_CODE: 'کد درخواستی وجود ندارد یا نامعتبر است!',
        ERR_INVALID_EMAIL: 'آدرس ایمیل نامعتبر است.',
        ERR_INVALID_FORMAT: 'فرمت ارسال اطلاعات صحیح نیست.',
        ERR_INVALID_METHOD: 'روش ارسال اطلاعات صحیح نیست.',
        ERR_INVALID_PASSWORD: 'رمز عبور نامعتبر است.',
        ERR_INVALID_REQUEST: 'درخواست نامعتبر است.',
        ERR_NULL_RESPONSE: 'سرور پاسخ درستی ارائه نکرد.',
        ERR_POST_DATA: 'داده های ارسالی صحیح نیستند.',
        ERR_REQUEST_EXPIRED: 'برای ارسال درخواستتان خیلی دیر است',
        ERR_SAME_EMAIL: 'آدرس ایمیل جدید نباید با آدرس ایمیل فعلی یکسان باشد.',
        ERR_SAME_PASSWORD: 'رمز عبور جدید نباید با رمز عبور فعلی یکسان باشد.',
        ERR_SERVER_INVALID_CAPTCHA: 'اعتبار سنجی کپچا در سرور درخواست شما را نمی پذیرد.',
        ERR_SERVICE_UNAVAILABLE: 'سرویس در دسترس نیست.',
        ERR_TOO_MANY_REQUESTS: 'شما بیش از حد مجاز درخواست ارسال کرده اید. لطفا بعدا دوباره تلاش کنید.',
        ERR_UNAUTHORIZED: 'شما اجازه دسترسی به این صفحه را ندارید.',
        ERR_UNAUTHORIZED_EMAIL:'آدرس ایمیلی که وارد کردید آدرس فعلی شما نیست.',
        ERR_UNKNOWN: 'یک خطای ناشناخته رخ داده است.',
        ERR_UNKNOWN_AUTHORIZING_USER: 'یک خطای ناشناخته در هنگام تایید حساب کاربری رخ داده است.',
        ERR_UNKNOWN_CREATING_USER: 'یک خطای ناشناخته در هنگام ساخت حسای کاربری رخ داده است.',
        ERR_UPDATE_FAILS: 'خطایی در هنگام بروزرسانی اطلاعات رخ داده است.',
        ERR_USER_NOT_FOUND: 'کاربری با این مشخصات پیدا نشد.',
        ERR_USER_NOT_VERIFIED: 'کاربر تایید نشده است.',
        HTML_ERROR_404: 'صفحه ای که به دنبال آن هستید وجود ندارد.',
        UNACCEPTABLE_EMAIL: 'آدرس ایمیل جدید قابل قبول نیست زیرا در حال حاضر در حال استفاده است.',
    },
    messageDialog: {
        ok: 'تایید',
        userCreatedSuccessfully: {
            title: 'تبریک!',
            message: 'حساب شما با موفقیت ایجاد شد. لطفاً ایمیل خود را بررسی کنید تا حساب خود را فعال کنید. ممکن است آن را در پوشه هرزنامه خود پیدا کنید (فراموش نکنید آن را بررسی کنید).',
        },
        passwordReadyReset: {
            title: 'بازنشانی کنیم!',
            message: 'اکنون می توانید رمز عبور خود را بازنشانی کنید. یک ایمیل با لینک بازنشانی برای شما ارسال شده است. ممکن است آن را در پوشه هرزنامه خود پیدا کنید (فراموش نکنید آن را بررسی کنید).',
        },
    },
    advanceSettingsDialog: {
        title: 'تنظیمات پیشرفته',
        password: 'رمز عبور',
        email: 'ایمیل',
        updatingPassword: 'در حال بروزرسانی رمز عبور...',
        updatingEmail: 'در حال بروزرسانی ایمیل...',
        loading: 'در حال بارگذاری...',
        updateAndLogin: 'بروزرسانی و خروج',
        emailUpdateInfo:'هشدار! اگر ایمیل خود را تغییر دهید، از سیستم خارج خواهید شد و باید دوباره با ایمیل جدید خود وارد شوید.',
    },
    profilePictureDialog: {
        title: 'انتخاب تصویر پروفایل',
        description: 'یک عکس نمایه برای حساب کاربری خود انتخاب کنید.',
        save: 'ذخیره',
        discard: 'بی خیال',
    },
    agenciesPage: {
        fetchingAgencies: 'در حال دریافت اطلاعات از سرور...',
        activeAgency: 'آژانس فعال است.',
        addressOfBusiness: 'آدرس محل کسب و کار',
        addressWarning: 'آدرس باید دقیق و کامل وارد شود.',
        agencyMainPhoneNumber: 'شماره تلفن اصلی آژانس',
        agencyName: 'نام آژانس',
        agencySecondaryPhoneNumber: 'شماره تلفن دوم آژانس (ضروری نیست).',
        agencySelection: 'انتخاب آژانس',
        businessLocation: 'محل کسب و کار خود را بیابید:',
        editAddress: 'ویرایش آدرس',
        editPhone: 'ویرایش شماره تلفن',
        endOfWorkingHours: 'پایان ساعات کاری',
        inactiveAgency: 'آژانس غیر فعال است.',
        localization: 'بومی سازی',
        mobileNumberPlaceholder: 'شماره تلفن همراه',
        mobileNumberVisibility: 'سایر افراد نمی توانند شماره تلفن همراه شما را ببینند.',
        next: 'بعدی',
        previous: 'قبلی',
        add: 'افزودن',
        update: 'به روز رسانی',
        phoneNumberPlaceholder1: 'شماره تلفن محل کار 1',
        phoneNumberPlaceholder2: 'شماره تلفن محل کار 2',
        phoneNumbersError: 'داشتن شماره تلفن محل کار و شماره تلفن همراه ضروری است! (شماره تلفن ها باید حداقل 10 رقم باشند)',
        preparing: 'در حال آماده سازی...',
        startOfWorkingHours: 'شروع ساعات کاری',
        title: 'مدیریت آژانس ها',
        workingHours: 'ساعات کاری',
        maximumLengthOfAgencyName: 'حداکثر طول نام آژانس 50 کاراکتر است.',
        editAgency: {
            title: 'ویرایش آژانس',
            updating:'در حال به روز رسانی آژانس...',
        },
        addNewAgency: {
            title: 'افزودن آژانس جدید',
            updating:'در حال افزودن آژانس جدید...',
        },
    },
    jobRequestsPage: {
        title: 'درخواست های شغلی',
        loading: 'در حال بارگذاری...',
        receivingJobRequests: 'در حال دریافت درخواست های شغلی...',
        agencyName: 'نام آژانس',
        status: 'وضعیت',
        notSent: 'ارسال نشده',
        sent: 'ارسال شده',
        accepted: 'پذیرفته شده',
        reload: 'بارگذاری مجدد',
    },
    settingsPage: {
        title: 'تنظیمات',
        fullName: 'نام و نام خانوادگی',
        fullNameDescription: 'لطفا نام و نام خانوادگی خود را وارد کنید.',
        profilePictureDescription: 'با کلیک بر روی تصویر پروفایل خود می توانید آن را تغییر دهید.',
        advancedSettingsDescription:'برای تغییر رمز عبور و آدرس ایمیل خود، روی "تنظیمات پیشرفته" کلیک کنید.',
        advancedSettings: 'تنظیمات پیشرفته',
        localization: 'بومی سازی',
        localizationWarning: 'بومی سازی به دسترسی دقیق‌تر به داده‌ها کمک می‌کند، بنابراین لطفاً آن را با دقت انتخاب کنید.',
        save: 'ذخیره',
        loading: 'در حال بارگزاری تنظیمات...',
        customer: 'مشتری',
        personnel: 'پرسنل',
        entrepreneur: 'کارآفرین',
        customerAccess: 'درخواست سفر کنید یا سفرهای قبلی را مشاهده کنید',
        personnelAccess: 'درخواست کار کنید و پیشنهاد سفر را بپذیرید',
        entrepreneurAccess: 'دسترسی به کلیه فعالیت های آژانس و پرسنل',
        selectAccountType:'نوع حساب کاربری را انتخاب کنید:',
    },
    pageNotFound: {
        title: 'صفحه مورد نظر وجود ندارد!',
        error404: 'خطای 404',
        message: 'هوم... انگار گم شدی یا راه را اشتباه رفتی! جای نگرانی نیست، من به سمت خونه هدایتت میکنم. اوقات خوبی داشته باشی.',
        returnHome: 'بازگشت به خونه',
        redirectingToHomePage: 'در حال انتقال به صفحه اصلی...',
        imageAlt: 'نقشه 404 پیدانشد گم شده',
    },
    emailVerificationPage: {
        title: 'تایید ایمیل',
        loading: 'در حال تأیید حساب شما...',
        operationFail: 'فرآیند تأیید حساب ناموفق بود.',
        reason: 'دلیل:',
        problems: {
            internetConnection: 'مطمئن شوید که اتصال اینترنت شما کار می کند.',
            emailExpired: 'کد صحیح برای شما ایمیل خواهد شد. (مطمئن شوید که پوشه اسپم شما بررسی شده است.)',
            networkChanged: 'با کلیک بر روی دکمه "ارسال مجدد" می توانید درخواست را مجددا ارسال کنید.',
            serverError: 'اگر هیچ یک از روش ها کار نکرد، با مدیر سیستم تماس بگیرید.',
        },
        resend: 'ارسال مجدد',
        return: 'بازگشت',
        operationSuccess: 'تبریک!',
        successMessage: 'تأیید حساب با موفقیت انجام شد. اکنون می توانید به حساب خود دسترسی داشته باشید و از ویژگی های سایت استفاده کنید. برای بازگشت به صفحه اصلی، روی دکمه "بازگشت" کلیک کنید.',
        redirectingToHomePage: 'در حال تغییر مسیر به صفحه اصلی...',
    },
    resetPasswordPage: {
        expiredMessage: 'شما از لینک منقضی شده استفاده کرده اید. یک ایمیل جدید برای شما ارسال شده است. (مطمئن شوید که پوشه اسپم شما بررسی شده است.)',
        loading: 'در حال بازنشانی کلمه عبور...',
        operationSuccess: 'تبریک!',
        redirectingToHomePage: 'در حال تغییر مسیر به صفحه اصلی...',
        resetPassword: 'تغییر کلمه عبور',
        return: 'بازگشت',
        successMessage: 'کلمه عبور شما با موفقیت تغییر کرد. اکنون می توانید به حساب کاربری خود دسترسی داشته باشید و از ویژگی های سایت استفاده کنید. برای بازگشت به صفحه اصلی روی "بازگشت" کلیک کنید.',
        successToastMessage: 'بازنشانی کلمه عبور با موفقیت انجام شد.',
        title: 'بازنشانی کلمه عبور',
    },
    loginDialog: {
        title: 'وارد شوید یا ثبت نام کنید',
        loginTab: {
            title: 'ورود',
            passwordHelperText: 'برای ارسال رمز عبور به سرور، فرمت رمز عبور باید به درستی وارد شود.ما قبل از ارسال فرمت قابل قبول را بررسی می کنیم.',
            login: 'ورود',
            resetPassword: 'تنظیم مجدد رمز عبور',
            forgetPassword: 'اگر رمز عبور خود را فراموش کردید روی دکمه "تنظیم مجدد رمز عبور" کلیک کنید.'

        },
        registerTab: {
            title: 'ثبت نام',
            register: 'ثبت نام',
        },
        userInformation: {
            title: 'اطلاعات کاربری',
        },
    },
    submitForm: {
        captchaHelperText: 'کپچا باید تایید شود.',
        captchaProviderError: 'مشکلی در ارائه دهنده کپچا رخ داده است، شاید به دلیل اختلال در اینترنت. توصیه می کنیم در صورتی که کپچا ظاهر نشد یا درست کار نکرد، چند ثانیه صبر کنید یا این کادر محاوره ای را دوباره باز کنید.',
        confirmEmail: 'تایید ایمیل',
        confirmNewPassword: 'تایید رمز عبور جدید',
        confirmPassword: 'تایید رمز عبور',
        confirmPasswordHelperText: 'تایید رمز عبور باید همان رمز عبور وارد شده باشد.',
        currentEmail: 'ایمیل فعلی',
        currentPassword: 'رمز عبور فعلی',
        currentPasswordHelperText:'رمز عبور فعلی خود را وارد کنید.',
        email: 'ایمیل',
        emailHelperText: 'به عنوان مثال: e_mail@email.com.',
        newEmail: 'ایمیل جدید',
        newPassword: 'رمز عبور جدید',
        password: 'رمز عبور',
        passwordHelperText: "رمز عبور باید حداقل شامل هشت کاراکتر، شامل حداقل یک حرف بزرگ، یک عدد و یک نماد باشد. به عنوان مثال: 'Password_1'.",
        update: 'بروزرسانی',
        confirmEmailHelperText: 'ایمیل تایید شده باید همان ایمیل وارد شده باشد.',
        currentEmailHelperText: 'ایمیل فعلی خود را وارد کنید.',
    }
};
export default persian;