# Publishing a Blog Article

Before we dive into the specifics of publishing a blog article, it's important to understand the tools involved. The process requires the use of GitHub, a platform for version control and collaboration, and Markdown, a lightweight markup language for creating formatted text. Here are documentation links to learn more:

1. [GitHub Documentation](https://docs.github.com/). The most relevant chapters are [Get Started](https://docs.github.com/en/get-started), [Repositories](https://docs.github.com/en/repositories) and [Pull Requests](https://docs.github.com/en/pull-requests).
2. [Markdown Guide](https://www.markdownguide.org/). Take a look at the quick reference for [basic Markdown syntax](https://www.markdownguide.org/cheat-sheet/#basic-syntax).

To publish a blog article on the [soracard.com](http://soracard.com/) blog, follow these steps:

## 1. Write an Article in Notion

Start by drafting your article in Notion, including all the content, images, and other elements you want to include. Notion is particularly useful for drafting articles as it allows for markdown formatting, which makes the transition to GitHub smoother and more efficient.

![Screenshot](./images/01.jpg)

## 2. Fork the `soracard-site-web` GitHub Repository

Once your article is complete, navigate to the [soracard.com GitHub repository](https://github.com/sora-xor/soracard-site-web). Fork it if you haven't already.

![Screenshot](./images/02.jpg)

If you've previously forked the repository, ensure to sync it with the upstream repository.

![Screenshot](./images/03.jpg)

## 3. Add an Article to the Forked Repository

Navigate to the forked GitHub repository and add a new `.md` file to the `/src/content/blog` directory.

![Screenshot](./images/04.jpg)

Name the file appropriately. The file you create will determine the **URL of the published article**. Ensure that the filename is descriptive and uses hyphens instead of spaces for optimal SEO.

![Screenshot](./images/05.jpg)

Add the required meta information at the beginning of the file:

```yaml
---
title: 'Article Title'
description: 'Description (155-260 characters)'
date: 2024-03-11
image: /blog/[article-path]/cover.jpg # cover for the website, 1920x1080px
og: /blog/[article-path]/og.jpg # thumbnal image for sharing, 1200x630px
---
```

Replace `[article-path]` in the paths with the actual `.md` file name. We will upload those images during [Step 4](#4-add-the-images).

- `image` is an article cover image to be used on the website. Its size should be 1920x1080px, and it's recommended to minimize the amount of text on that image.

- `og` is an image to be used when sharing the article on social media. Its size should be 1200x630px

![Screenshot](./images/06.jpg)

Copy-paste the article content from Notion.

![Screenshot](./images/07.jpg)

Commit changes:

1. Select the option **create a new branch** and name the branch following the format: `feat/[article-path]-article`, replacing `[article-path]` with the actual `.md` file name.
2. Then press the **Propose changes** button.

![Screenshot](./images/08.jpg)

Select the **compare across forks** option to be able to see the upstream repo.

![Screenshot](./images/09.jpg)

Select `sora-xor/soracard-site-web` upstream as the base repository and branch `master`, then push the **Create pull request** button.

![Screenshot](./images/10.jpg)

Select the **Create draft pull request** option, as images need to be uploaded before ready for review, and push the button.

![Screenshot](./images/11.jpg)

After creating the PR and approving the preview deploy by the admin, you'll receive a message from the Vercel bot with a preview link.

![Screenshot](./images/12.jpg)

Visit the preview link and scroll down to the blog. You may notice the cover image missing in the article.

![Screenshot](./images/13.jpg)

So let’s add the images.

## 4. Add the Images

First of all, use the Squoosh app to optimize the images for web use. This ensures that the images load quickly and look good on the blog.

Visit [squoosh.app](https://squoosh.app)

![Screenshot](./images/14.jpg)

Upload the image to optimize.

- For the cover/hero image, the size should be **1920x1080 pixels** (use **Resize** toggle to adjust if needed).
- For the sharing image, the size should be **1200x630 pixels** (use **Resize** toggle to adjust if needed).
- For other images, a recommended width is **1280 pixels**.

You can experiment with various compression parameters or just use **MozJPEG 80% quality**.

![Screenshot](./images/15.jpg)

Upload the images to the `/src/public/blog/[article-path]` directory of the previously created branch ...

![Screenshot](./images/16.jpg)

... and commit the changes.

![Screenshot](./images/17.jpg)

If your article body includes images, be sure to replace their Notion URLs with the local ones you just uploaded. Follow this pattern for the URL: `/blog/[article-path]/[image-name]`. Commit the changes after updating.

![Screenshot](./images/18.jpg)

Once the project rebuilds, you can see that now images are in place.

![Screenshot](./images/19.jpg)

Nice, the article is ready, so push the **Ready for review** button.

![Screenshot](./images/20.jpg)

## 5. Publish on production

A member of the `soracard` team will review the PR, either request changes or approve it, and subsequently merge it into the master branch. Once merged, the changes will be published in production.
