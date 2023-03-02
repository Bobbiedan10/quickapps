const APPS = [
  {
    id: "quickbusiness-book",
    title: "QuickBusiness Book",
    appLogo: "/img/QBB.png",
    url: {
      android:
        "https://play.google.com/store/apps/details?id=com.quickservices.quickbusiness_book&hl=en&gl=US",
      apple: "https://apps.apple.com/bb/app/quickbusiness-book/id1522587006",
      web: "/apps/phonebook",
    },
    description: "",
  },
  {
    id: "quickbusiness",
    title: "QuickBusiness",
    appLogo: "/img/QB.jpg",
    url: {
      android:
        "https://play.google.com/store/apps/details?id=com.quickapps.phonebook_business&hl=en&gl=US",
      apple: "https://apps.apple.com/bb/app/quickbusiness/id1521897277",
      web: "",
    },
    description: "",
  },
];

export function getAllApps() {
  return APPS;
}

export function getAppById(id) {
  return APP.find((app) => app.id === id);
}
