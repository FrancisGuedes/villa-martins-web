export module AboutTextContentModule {
    export interface IContent2 {
        nodeType: string;
        value: string;
        marks: any[];
        data: object;
    }

    export interface IContent {
        nodeType: string;
        data: object;
        content: IContent2[];
    }

    export interface IParagraphContent {
        nodeType: string;
        data: object;
        content: IContent[];
    }

    export interface IFields {
        name: string;
        id: string;
        paragraphContent: IParagraphContent;
    }

    export interface IAboutTextContent {
        metadata: object;
        sys: object;
        fields: IFields;
    }
}

export module AboutImageContentModule {
    export interface IFile {
        url: string;
        details: object;
        fileName: string;
        contentType: string;
    }

    export interface IFields2 {
        title: string;
        description: string;
        file: IFile;
    }

    export interface IMedia {
        metadata: object;
        sys: object;
        fields: IFields2;
    }

    export interface IFields {
        name: string;
        id: string;
        media: IMedia;
        alt: string;
    }

    export interface ImageContent {
        metadata: object;
        sys: object;
        fields: IFields;
    }
}

export module AboutModule {
    export interface IFields2 {
        name: string;
        id: string;
        rel: string;
        href: string;
    }

    export interface IHref {
        metadata: object;
        sys: object;
        fields: IFields2;
    }

    export interface IFields {
        name: string;
        id: string;
        href: IHref;
    }

    export interface IAboutButton {
        metadata: object;
        sys: object;
        fields: IFields;
    }

    export interface IAbout {
        name: string;
        id: string;
        title: string;
        textContent: AboutTextContentModule.IAboutTextContent[];
        utilitiesTitle: string;
        utilities: string[];
        imageContent: AboutImageContentModule.ImageContent;
        aboutButton: IAboutButton;
    }
}

