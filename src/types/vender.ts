import type { Tweet_formated } from './twitter';

export interface Vender{
    name: string,
    image: string,
    description: string,
    twitterId: string,
    tweets: Tweet_formated[],
    created : number,
    updated : number,

}