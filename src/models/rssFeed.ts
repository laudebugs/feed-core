import { FeedItem } from './feedItem'

export class RSSFeed {
    #title!: string
    #description!: string
    #link!: string
    #language: string = 'en'
    #feedImage!: string
    #favicon?: string
    #copyright?: string = 'All rights reserved 2021, Lau de Bugs'
    #updatedAt?: Date
    #feedLinks: { [index: string]: string } = {
        json: '',
        atom: '',
    }
    #author!: FeedAuthor
    #items: FeedItem[] = []
    #categories: string[] = []

    constructor(title: string, description: string, link: string) {
        this.title = title
        this.description = description
        this.link = link
    }

    set title(title: string) {
        this.#title = title
    }

    get title() {
        return this.#title
    }
    set description(description: string) {
        this.#description = description
    }
    get description() {
        return this.#description
    }
    set link(link: string) {
        this.#link = link
    }

    get link() {
        return this.#link
    }

    set author(author: FeedAuthor) {
        this.#author = author
        this.#copyright = `All rights reserved ${new Date().getFullYear()}, ${
            author.name
        }`
    }

    addCategory(category: string) {
        this.#categories.push(category)
    }
    get categories() {
        return this.#categories
    }
    get author() {
        return this.#author
    }

    addItem(item: { [key in keyof FeedItem]: FeedItem[key] }) {
        this.#items.push(item)
    }

    set items(items: FeedItem[]) {
        this.#items = items
    }

    get items() {
        return this.#items
    }
    get language() {
        return this.#language
    }

    set feedImage(feedImage: string) {
        this.#feedImage = feedImage
    }

    get feedImage() {
        return this.#feedImage
    }

    generateRSS() {
        return `<?xml version="1.0" encoding="UTF-8"?> <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
        <channel>
            <title>${this.title}</title>
            <description>${this.description}</description>
            <link>${this.link}</link>
            <atom:link href="${
                this.link
            }" rel="self" type="application/rss+xml"/>
            <language>${this.language}</language>
            <lastBuildDate>Wed, 08 Dec 2021 23:21:47 +0000</lastBuildDate>
            ${
                this.#copyright
                    ? `<copyright>${this.#copyright}</copyright>`
                    : ''
            }
            ${
                this.categories.length > 0
                    ? `<category>${this.categories.join(
                          '</category><category>',
                      )}</category>`
                    : ''
            }
            <image>
                <url>${this.feedImage}</url>
                <title>${this.title}</title>
                <link>${this.link}</link>
            </image>
            ${
                this.#favicon
                    ? `<image>
                <url>${this.#favicon}</url>
                <title>${this.title}</title>
                <link>${this.link}</link>
            </image>`
                    : ''
            }
            ${
                this.items.length > 0
                    ? this.items
                          .map((item) => this.generateItemXML(item))
                          .join('')
                    : ''
            }
        </channel>
        </rss>`
    }

    // TODO: Implement
    private generateJSON() {
        return JSON.stringify(this)
    }

    private generateItemXML(item: FeedItem) {
        return `
            <item>
                <title>${item.title}</title>
                <link>${item.link}</link>
                <pubDate>${item.date.toISOString()}</pubDate>
                ${
                    item.authors.length > 0
                        ? item.authors
                              .map(
                                  (author) => `<author>${author.name}</author>`,
                              )
                              .join('')
                        : ''
                }
                <guid>${item.link}</guid>
                <description>
                    <![CDATA[ ${item.description}]]>
                </description>
                <content:encoded>
                    <![CDATA[ ${item.content} ]]>
                </content:encoded>
                <media:content height="${
                    item.image.height
                }" medium="image" url="${item.image.url}" width="${
            item.image.width
        }"/>
                ${
                    item.image.thumbnail
                        ? `<media:thumbnail url="${item.image.thumbnail}"/>`
                        : ''
                }
                ${
                    item.image.credit
                        ? `<media:credit>
                            <![CDATA[ ${item.image.credit} ]]>
                            </media:credit>`
                        : ''
                }
                ${
                    item.image.description
                        ? `<media:description>
                            <![CDATA[${item.image.description}]]>
                        </media:description>`
                        : ''
                }
            </item>
            `
    }
}

export class FeedAuthor {
    constructor(
        public name: string,
        public email: string,
        public link: string,
    ) {}
}
