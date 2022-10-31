export module ContactModule {
    export interface ISys2 {
        space: object;
        id: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        environment: object;
        revision: number;
        contentType: object;
        locale: string;
    }

    export interface ISys {
        space: object;
        id: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        environment: object;
        revision: number;
        contentType: object;
        locale: string;
    }

    export interface File {
        url: string;
        details: object;
        fileName: string;
        contentType: string;
    }

    export interface IFields3 {
        title: string;
        description: string;
        file: File;
    }

    export interface IMedia {
        metadata: object;
        sys: object;
        fields: IFields3;
    }

    export interface IFields2 {
        name: string;
        id: string;
        href: string;
        media: IMedia;
        alt: string;
    }

    export interface ILink {
        metadata: object;
        sys: ISys2;
        fields: IFields2;
    }

    export interface IFields {
        links: ILink[];
        name: string;
        id: string;
    }

    export interface ISocialMediaLinks {
        metadata: object;
        sys: ISys;
        fields: IFields;
    }

    export interface IContact {
        id: string;
        name: string;
        socialMediaLinks: ISocialMediaLinks[];
        title: string;
    }
}

