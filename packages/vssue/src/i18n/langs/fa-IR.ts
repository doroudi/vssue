import VueI18n from 'vue-i18n';

const messages: VueI18n.LocaleMessageObject = {
  // auth
  login: 'ورود با{platform}',
  logout: 'خروج',
  currentUser: 'کاربر جاری',

  // comment input
  loading: 'در حال بارگذاری',
  submit: 'ثبت',
  submitting: 'در حال ثبت',
  submitComment: 'ارسال نظر',
  cancel: 'لغو',
  edit: 'ویرایش',
  editMode: 'حالت ویرایش',
  delete: 'حذف',
  reply: 'پاسخ',

  // reactions
  heart: 'قلب',
  like: 'پسندیدم',
  unlike: 'نمی پسندم',

  // pagination
  perPage: 'نظرات در هر صفحه',
  sort: 'برای تغییر جهت مرتب سازی کلیک کنید',
  page: 'صفحه',
  prev: 'صفحه قبلی',
  next: 'صفحه بعدی',

  // hint
  comments: 'نظرات | {count} نظر | {count} نظر',
  loginToComment: 'ورود با حساب {platform} برای ارسال نظر',
  placeholder:
    'ارسال نظر. MarkDown پشتیبانی می شود.برای ثبت نظر Ctrl + Enter بزنید',
  noLoginPlaceHolder:
    'برای ارسال نظر وارد شوید. از Markdown پشتیبانی می شود. ',

  // status
  failed: 'خطا در بارگذاری نظرات',
  initializing: 'در حال شروع...',
  issueNotCreated: 'برای ایجاد Issue کلیک کنید.',
  loadingComments: 'Loading comments...',
  loginRequired: 'برای مشاهده نظرات وارد شوید.',
  noComments: 'هنوز نظری ارسال نکرده است. اولین نظر را ارسال کنید !',

  // alerts
  reactionGiven: `قبلا '{reaction}' ارسال شده است`,
  deleteConfirm: 'حذف نظر را تایید می کنید؟',
  deleteFailed: 'نظر حذف نشد',
};

export default messages;
