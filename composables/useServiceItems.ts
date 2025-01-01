export const useServiceItems = () => {
  const serviceItems = ref([
    {
      "titleKey": "pageHome.sessionServices.services.webCreation.title",
      "number": "01",
      "img": "/dark/assets/imgs/serv-icons/5.png",
      "descKey": "pageHome.sessionServices.services.webCreation.desc",
      "link": "/desarrollo-web"
    },
    {
      "titleKey": "pageHome.sessionServices.services.webSystems.title",
      "number": "02",
      "img": "/dark/assets/imgs/serv-icons/1.png",
      "descKey": "pageHome.sessionServices.services.webSystems.desc",
      "link": "/servicios"
    },
    {
      "titleKey": "pageHome.sessionServices.services.mobileApps.title",
      "number": "03",
      "img": "/dark/assets/imgs/serv-icons/3.png",
      "descKey": "pageHome.sessionServices.services.mobileApps.desc",
      "link": "/servicios"
    },
    {
      "titleKey": "pageHome.sessionServices.services.workflowAutomation.title",
      "number": "04",
      "img": "/dark/assets/imgs/serv-icons/4.png",
      "descKey": "pageHome.sessionServices.services.workflowAutomation.desc",
      "link": "/servicios"
    },
    {
      "titleKey": "pageHome.sessionServices.services.digitalMarketing.title",
      "number": "05",
      "img": "/dark/assets/imgs/serv-icons/2.png",
      "descKey": "pageHome.sessionServices.services.digitalMarketing.desc",
      "link": "/servicios"
    },
    {
      "titleKey": "pageHome.sessionServices.services.googleMyBusiness.title",
      "number": "06",
      "img": "/dark/assets/imgs/serv-icons/6.png",
      "descKey": "pageHome.sessionServices.services.googleMyBusiness.desc",
      "link": "/servicios"
    }
  ])

  return {
    serviceItems
  }
}