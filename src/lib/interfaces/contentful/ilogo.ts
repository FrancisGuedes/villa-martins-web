export module LogoModule {
  export interface ISys {
      space: Object;
      id: string;
      type: string;
      createdAt: Date;
      updatedAt: Date;
      environment: Object;
      revision: number;
      locale: string;
  }
  export interface IImage {
      width: number;
      height: number;
  }
  export interface IDetails {
      size: number;
      image: IImage;
  }
  export interface IFile {
      url: string;
      details: IDetails;
      fileName: string;
      contentType: string;
  }
  export interface IFields {
      title: string;
      description: string;
      file: IFile;
  }
  export interface IMedia {
      metadata: Object;
      sys: ISys;
      fields: IFields;
  }
  export interface ILogoData {
      name: string;
      id: string;
      href: string;
      media: IMedia;
      alt: string;
  }
}