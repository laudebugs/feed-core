import { FeedAuthor } from './rssFeed'

export class FeedItem {
    title!: string
    link!: string
    description!: string
    content!: string
    date: Date
    image?: FeedItemImage
    authors: FeedAuthor[] = []
    contributors: FeedAuthor[] = []

    constructor(
        title: string,
        link: string,
        description: string,
        content: string,
        date?: Date,
        image?: FeedItemImage,
        authors?: FeedAuthor[],
        contributors?: FeedAuthor[],
    ) {
        this.title = title
        this.link = link
        this.description = description
        this.content = content
        if (date) this.date = date
        else this.date = new Date()
        if (authors) this.authors = authors
        if (contributors) this.contributors = contributors
        if (image) this.image = image
    }
}

export class FeedItemImage {
    url: string
    height: number
    width: number
    thumbnail?: string
    description?: string
    credit?: string
    constructor(
        url: string,
        height: number,
        width: number,
        description?: string,
        thumbnail?: string,
        credit?: string,
    ) {
        this.url = url
        this.height = height
        this.width = width
        if (thumbnail) this.thumbnail = thumbnail
        if (description) this.description = description
        if (credit) this.credit = credit
    }
}
export class FeedItemAuthor extends FeedAuthor {}
