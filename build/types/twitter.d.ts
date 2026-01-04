export interface TweetsRaw {
    author_id: string;
    created_at: string;
    id: string;
    lang: string;
    reply_settings: string;
    text: string;
}
export interface Places {
    country: string;
    country_code: string;
    full_name: string;
    geo: {
        type: string;
        bbox: number[];
        properties: any;
    };
    id: string;
    name: string;
    place_type: string;
}
export interface Users {
    id: string;
    name: string;
    username: string;
    proctected: boolean;
    profile_image_url: string;
    created_at: string;
    description: string;
    verified: boolean;
}
export interface Rule {
    value: string;
    tag: string;
}
export interface matching_rules {
    id: string;
    tag: string;
}
export interface tweetStream {
    includes: {
        places: Places[];
        users: Users[];
        tweets: TweetsRaw[];
    };
    matching_rules: matching_rules[];
}
export interface Geotag {
    id: string;
    name: string;
    country: string;
    placeType: string;
    full_name: string;
    country_code: string;
    cord: {
        lat: number;
        long: number;
    };
}
export interface Tweet_formated {
    id: string;
    userId: string;
    userName: string;
    text: string;
    date: string;
    geo: Geotag;
}
//# sourceMappingURL=twitter.d.ts.map