# Mr Lock 24/7

[Preview URL here](https://mrlock-demo.surge.sh)

Address: <https://mrlock247.co.uk/>

Design: <https://www.figma.com/file/wTtlUQAcV7yHPjt5x2yOcU/2021-12-01---Mr.-Lock---website---v1---BD?node-id=0%3A1>

## CI/CD for building the static files

The CI/CD workflow for generating the static files can be triggered by creating new tags with vX.X.X format

1. Create new tag
```
git tag v0.0.1
```

2. Push the new created tag
```
git push origin v0.0.1
```

3. `Build static website` workflow is triggered automatically. It installs the project dependencies, builds the application and export the static files

4. The static files can be accessed by downloading the `static-site` archive from the artifacts section.

<img width="892" alt="Screenshot 2022-04-03 at 04 49 27" src="https://user-images.githubusercontent.com/11219583/161407791-830972a5-4d6e-4261-987c-3cc067f7d3a1.png">

5. Update the static files on the server / cloud platform

# NextJS decomentation

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
