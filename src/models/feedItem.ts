import { FeedAuthor } from './rssFeed'

export class FeedItem {
    title!: string
    link!: string
    description!: string
    content!: string
    authors: FeedAuthor[] = []
    contributor: FeedAuthor[] = []
    date!: Date
    image!: FeedItemImage

    constructor(
        title: string,
        link: string,
        description: string,
        content: string,
        authors: FeedAuthor[],
        contributor: FeedAuthor[],
        date: Date,
        image: FeedItemImage,
    ) {
        this.title = title
        this.link = link
        this.description = description
        this.content = content
        this.authors = authors
        this.contributor = contributor
        this.date = date
        this.image = image
    }
}

export class FeedItemImage {
    url: string
    thumbnail?: string
    description?: string
    credit?: string
    height: number
    width: number
    constructor(
        url: string,
        thumbnail: string,
        description: string,
        credit: string,
        height: number,
        width: number,
    ) {
        this.url = url
        this.thumbnail = thumbnail
        this.description = description
        this.credit = credit
        this.height = height
        this.width = width
    }
}
export class FeedItemAuthor extends FeedAuthor {}
