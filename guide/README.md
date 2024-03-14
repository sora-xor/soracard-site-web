# Publishing a blog article

Before we dive into the specifics of publishing a blog article, it's important to understand the tools involved. The process requires the use of GitHub, a platform for version control and collaboration, and Markdown, a lightweight markup language for creating formatted text. Here are documentation links to learn more:

1. [GitHub Documentation](https://docs.github.com/). The most relevant chapters are [Get Started](https://docs.github.com/en/get-started), [Repositories](https://docs.github.com/en/repositories) and [Pull Requests](https://docs.github.com/en/pull-requests).
2. [Markdown Guide](https://www.markdownguide.org/). Take a look at the quick reference for [basic Markdown syntax](https://www.markdownguide.org/cheat-sheet/#basic-syntax).

To publish a blog article on the [soracard.com](http://soracard.com/) blog, follow these steps:

## 1. Write an article in Notion.

Start by drafting your article in Notion, including all the content, images, and other elements you want to include. Notion is particularly useful for drafting articles as it allows for markdown formatting, which makes the transition to GitHub smoother and more efficient.

![Screenshot](./images/01.jpg)

## 2. Add an article to the GitHub repo.

Once your article is complete, navigate to the [soracard.com](http://soracard.com/) blog's GitHub repository and add a new `.md` file to the [src/content/blog](https://github.com/soramitsu/soracard-site-web/tree/master/src/content/blog) directory.

![Screenshot](./images/02.jpg)

**Name the file appropriately.** The file you create will determine the URL of the published article. Ensure that the filename is descriptive and uses hyphens instead of spaces for optimal SEO.

![Screenshot](./images/03.jpg)

Add the required meta information at the beginning of the file:

```yaml
---
title: 'Article Title'
description: 'Description (155-260 characters)'
date: 2024-03-11
image: /blog/[article-path]/cover.jpg
---
```

Replace `[article-path]` in the image path with the actual `.md` file name. We will upload this image during [Step 3](#3-add-the-images).

![Screenshot](./images/04.jpg)

Copy-paste the article content from Notion.

![Screenshot](./images/05.jpg)

Commit changes.

![Screenshot](./images/06.jpg)

Assign the `soracard` team as reviewers and create a pull request.

![Screenshot](./images/07.jpg)

After creating the PR you can see the message from the Vercel bot with a preview link.

![Screenshot](./images/08.jpg)

Let’s visit the preview link and scroll down to the blog. We can find that the cover image is missing in the article. So let’s add the images.

![Screenshot](./images/09.jpg)

## 3. Add the images

First of all, use the Squoosh app to optimize the images for web use. This ensures that the images load quickly and look good on the blog.

Visit [squoosh.app](https://squoosh.app)

![Screenshot](./images/10.jpg)

Upload the image to optimize. For the cover/hero image, the size should be **1920x1080px** (use `Resize` toggle to adjust if needed), for the other images recommended width is **1280px**. You can experiment with various compression parameters, or just use **MozJPEG 80% quality**.

![Screenshot](./images/11.jpg)

Upload the images to `src/public/blog/[article-path]` directory of the branch created previously

![Screenshot](./images/12.jpg)

... and commit the changes

![Screenshot](./images/13.jpg)

If your article body includes images, be sure to replace their Notion URLs with the local ones you just uploaded. Follow this pattern for the URL: `/blog/[article-path]/[image-name]`. Commit the changes after update.

![Screenshot](./images/14.jpg)

Once the project rebuilds, you can see that now images are in place.

![Screenshot](./images/15.jpg)

## 4. Publish on production

Wait for the Pull Request approval by a member of the `webdev` team and then merge it. Once merged, the changes will be published in production

![Screenshot](./images/16.jpg)
