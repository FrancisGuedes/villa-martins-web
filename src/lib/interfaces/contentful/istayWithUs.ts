export module StayWithUsTextModule {
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

    export interface IFields2 {
        name: string;
        id: string;
        paragraphContent: IParagraphContent;
    }

    export interface IParagraph {
        metadata: object;
        sys: object;
        fields: IFields2;
    }

    export interface IFields {
        name: string;
        id: string;
        title: string;
        paragraphs: IParagraph[];
    }

    export interface IStayWithUsText {
        metadata: object;
        sys: ISys;
        fields: IFields;
    }
}

export module StayWithUsImageModule {
    export interface IFile {
        url: string;
        details: object;
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

    export interface IImageMedia {
        metadata: object;
        sys: object;
        fields: IFields2;
    }

    export interface IFields {
        name: string;
        id: string;
        title: string;
        imageMedia: IImageMedia[];
    }

    export interface IStayWithUsImage {
        metadata: object;
        sys: object;
        fields: IFields;
    }
}



