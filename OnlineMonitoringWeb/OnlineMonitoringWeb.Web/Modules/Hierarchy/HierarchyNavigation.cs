using Serenity.Navigation;
using MyPages = OnlineMonitoringWeb.Hierarchy.Pages;

[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/مناطق", typeof(MyPages.RegionalController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/استانها", typeof(MyPages.ProvinceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/شرکتهای توزیع", typeof(MyPages.DistributionController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/امور نواحی", typeof(MyPages.AreaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/ایستگاه های تولید پراکنده", typeof(MyPages.StationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/واحد های نیروگاهی", typeof(MyPages.UnitController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "اطلاعات شبکه/سطوح دسترسی کاربران", typeof(MyPages.RankInHierarchyController), icon: null)]