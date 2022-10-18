export interface IFieldId {
    [fieldId: string]: unknown
}

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
