export interface UserProps {
    featuredImage: string;
    name: string;
    image: string;
  }
  

  export interface PageProps {
    body: any[]; 
    featuredImage: string;
    slug: string;
    title: string;
    user: UserProps;
    _id: string;
  }
  

  export interface NotFoundProps {
    data: {
      site: SiteProps;  
      page: PageProps;
    };
  }
  

  export interface SiteProps {

    name: string;
    url: string;
  }