type Media = {
    product_images: {
        count: number;
        first: {
            140: string,
            280: string,
            800: string,
        }
        uri: string,
    }
}
type Popularity = {total: number, in_category: number, trend: number};
type User_reviews = {
    count: number;
    rating: number | string;
    uri: string;
    web_uri: string;
}
type Product = {
    brand: object;
    category: object;
    created_at: string;
    expert_reviews: object;
    id: number;
    media: Media;
    mobile_web_uri: string;
    name: string;
    popularity: Popularity;
    price: object;
    semantic_id: string;
    statistics: object;
    stock_status: string;
    uri: string;
    user_reviews: User_reviews;
    web_uri: string;
}

type PriceInfo = {
    description: string;
    ident: string;
    picture: string;
    priceId: number;
    secondLowestPrice: number;
    shardIndex: number;
    sortCatId: number;
    sortCatName: number;
    storeId: number;
    url: string;
}

type Price = {
    compare: number;
    days_ago_compare: number;
    diff_percentage: number;
    display: {
        offer: string,
        previousPrice: string
    },
    id: number;
    offer: number;
    offer_incl_shipping: number;
    offer_previous_price: number;
    stock_status: string;
    type: string;
}

type Source = {
    campaign: {id: number, uri: string},
    clicks: number;
    country_code: string;
    description: object;
    external_uri: string;
    header: undefined;
    id: number;
    item_image: undefined;
    item_type: string;
    offer_activated: number;
    price: Price;
    priceInfo: PriceInfo;
    product: Product;
    rank: number;
    risk: number;
    riskFactors: object;
    status: string;
    statusInfo: object;
    store: object;
    uri: string;
}

export type ProductInfor = {
    _id: number;
    _index: string;
    _score: number;
    _source: Source;
    _type: string;
}
