# Next Stepzen News Api

A news app using NextJS 13, Stepzen, GraphQL, TypeScript and TailwindCSS.

## Demo

![project](https://i.imgur.com/WbJdMtS.png)

## Features

-   NextJS 13 with appDir experimntal features and route groups
-   Mediastack API
-   GraphQL API queries using StepZen
-   Dynamic/Static Data Fetching
-   TypeScript
-   TailwindCSS
-   Search Functionality
-   Dark Mode
-   Fully Responsive

## How to run locally

1. Clone the project

```bash
  git clone https://github.com/acmhub/nextjs-stepzen-news-api
```

2. Execute `npm install` or `yarn` to install all the packages.
3. Go to [mediastack](https://mediastack.com/) and create an account.
    - Copy the `API Access Key` from your [mediastack dashboard](https://mediastack.com/dashboard).
4. Go to [stepzen](https://stepzen.com/) and create an account.
    - Copy your `API Key`(not admin key) from your [stepzen account](https://dashboard.stepzen.com/account)
5. Paste the keys in your .env.local file following this structure:

```
MEDIASTACK_API_KEY=your_api_access_key
STEPZEN_API_KEY=your_api_key
```

6. Create an endpoint on your [stepzen dashboard](https://dashboard.stepzen.com/)
7. Update the `stepzen.config.json` file in the project directory with your endpoint name

```
{
  "endpoint": "api/your_endpoint_name"
}
```

8. Run `npm run dev` or `yarn dev`.
9. Go to [http://localhost:3000](http://localhost:3000).
