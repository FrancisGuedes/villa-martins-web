export module NavbarModule {
  export interface ISys {
      space: Object;
      id: string;
      type: string;
      createdAt: Date;
      updatedAt: Date;
      environment: Object;
      revision: number;
      contentType: Object;
      locale: string;
  }
  export interface IFields {
      name: string;
      id: string;
      rel: string;
      href: string;
      title: string
  }
  export interface INavlink {
      metadata: Object;
      sys: ISys;
      fields: IFields;
  }
  export interface INavbar {
      name: string;
      id: string;
      navlinks: INavlink[];
      logoImage: Object;
  }
}