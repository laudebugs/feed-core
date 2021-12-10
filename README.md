<h1 align="center">Welcome to feed-core 👋</h1>
<p>
  <a href="https://github.com/lbugasu/feed-core/actions/workflows/release.yml">
    <img src="https://github.com/lbugasu/feed-core/actions/workflows/release.yml/badge.svg"/>
  </a>
  <a href="https://www.npmjs.com/package/feed-core" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/feed-core.svg">
  </a>
  <a href="https://github.com/lbugasu/feed-core#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/lbugasu/feed-core/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/lbugasu/feed-core/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/lbugasu/feed-core" />
  </a>
  <a href="https://twitter.com/lbugasu" target="_blank">
    <img alt="Twitter: lbugasu" src="https://img.shields.io/twitter/follow/lbugasu.svg?style=social" />
  </a>
</p>

> Generate RSS Feeds that play nice with Google News

### 🏠 [Homepage](https://github.com/lbugasu/feed-core#readme)

## Install

```sh
npm install feed-core
```

## Usage

The two main types provided are `RSSFeed` and `FeedItem`

### Constructing a Feed

To create a new RSS feed, the RSSFeed class can be used and takes
the following parameters:

```typescript
const feed = new RSSFeed({
    title: 'Awesome Feed about Cats and Dogs',
    description: 'This is a feed about Cats vs Dogs',
    link: 'https://cats-v-dogs.com/rss',
})
```

The rest of the feed properties that can be set are:

-   `feedAuthor`: `FeedAuthor`:
    ```typescript
        const author = new FeedAuthor({
          name: 'Giomari Martinez',
          email: 'gigi@example.com'
          link: 'giomari-m.com'
        })
        feed.feedAuthor = author
    ```
-   `categories`: `string[]`:
    ```typescript
    feed.categories = ['cats', 'dogs']
    ```
-   `updatedAt`: `Date`:
    ```typescript
    feed.updatedAt = new Date()
    ```
-   `language`: `string`
    ```typescript
    feed.language = 'en'
    ```
-   `image`: `string`
    This represents the image url for the feed:
    ```typescript
    feed.image = 'https://example.com/cat-v-dogs.jpg'
    ```

### Adding Feed Items

Feed can be added to a feed's `items` property - an array of type `FeedItem[]`
<br/>

Each item should follow the signature of `FeedItem`:

```typescript
const feedImage = new FeedItemImage({
    url: 'https://unsplash.com/photos/EV9_vVMZTcg', // Image url
    width: 1280, // number - image width
    height: 720, // number - image height
    thumbnail: 'https://unsplash.com/photos/EV9_vVMZTcg', // (optional)image thumbnail url (optional)
    description: '', // string (optional) - the image description
    credit: '', // string (optional) - can be something like 'Image couretesy of Unsplash'
})
const feedItem = new FeedItem(
    // Required
    'In the subways, cats and dogs have to play nice', // the item title
    'https://https://cats-v-dogs.com/where-it-all-began', // Link to the item
    'A story of what really happened', // Item Summary/description
    'The story begins', // Content
    // Optional
    new Date(), // (optional) the publication date of the item - defaults to new Date()
    'https://https://cats-v-dogs.com/assets/where-it-all-began.jpg'[author], // (optional) FeedAuthor[] - authors
    [author], // (optional) FeedAuthor[] - contributors
)
```

## Author

👤 **Laurence B. Ininda**

-   Website: https://laudebugs.me
-   Twitter: [@lbugasu](https://twitter.com/lbugasu)
-   Github: [@lbugasu](https://github.com/lbugasu)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/lbugasu/feed-core/issues). You can also take a look at the [contributing guide](https://github.com/lbugasu/feed-core/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Laurence B. Ininda](https://github.com/lbugasu).<br />
This project is [ISC](https://github.com/lbugasu/feed-core/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
