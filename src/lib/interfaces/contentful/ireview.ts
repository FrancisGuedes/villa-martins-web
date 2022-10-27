export module ReviewModule {
    export interface IContent2 {
        data: object;
        marks: object[];
        value: string;
        nodeType: string;
    }

    export interface IContent {
        data: object;
        content: IContent2[];
        nodeType: string;
    }

    export interface ITheReview {
        data: object;
        content: IContent[];
        nodeType: string;
    }

    export interface IFields {
        name: string;
        id: string;
        reviewer: string;
        stars: number;
        reviewMonth: string;
        reviewYear: number;
        source: string;
        theReview: ITheReview;
    }

    export interface ICardReview {
        metadata: object;
        sys: object;
        fields: IFields;
    }

    export interface IReview {
        name: string;
        id: string;
        title: string;
        cardReviews: ICardReview[];
    }
}