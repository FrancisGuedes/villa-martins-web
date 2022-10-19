export module HomeButtonModule {
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
    export interface IFields3 {
        name: string;
        id: string;
        rel: string;
        href: string;
        title: string;
    }
    export interface IHref2 {
        metadata: Object;
        sys: Object;
        fields: IFields3;
    }
    export interface IFields2 {
        name: string;
        id: string;
        href: IHref2;
        ariaLabel: string;
    }
    export interface IHref {
        metadata: Object;
        sys: Object;
        fields: IFields2;
    }
    export interface IFields {
        name: string;
        id: string;
        href: IHref;
        ariaLabel: string;
    }
    export interface IButtonData {
        metadata: Object;
        sys: ISys;
        fields: IFields;
    }
}

export module CarouselModule {
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
    export interface IFields3 {
        title: string;
        description: string;
        file: IFile;
    }
    export interface IMedia {
        metadata: object;
        sys: object;
        fields: IFields3;
    }
    export interface IFields2 {
        name: string;
        id: string;
        media: IMedia;
        alt: string;
    }
    export interface ICarouselMedia {
        metadata: object;
        sys: object;
        fields: IFields2;
    }
    export interface IFields {
        name: string;
        id: string;
        carouselMedia: ICarouselMedia[];
    }
    export interface ICarousel {
        metadata: object;
        sys: ISys;
        fields: IFields;
    }
}

