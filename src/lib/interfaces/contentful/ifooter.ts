export module FooterModule {
    export interface Sys {
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

    export interface IFields {
        name: string;
        id: string;
        rel: string;
        href: string;
    }

    export interface ICraftedPersonContainerLink {
        metadata: object;
        sys: Sys;
        fields: IFields;
    }

    export interface IFooter {
        name: string;
        id: string;
        description: string;
        craftedTitle: string;
        craftedPersonName: string;
        craftedPersonContainerLink: ICraftedPersonContainerLink;
    }
}
