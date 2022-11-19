const cssSkeleton = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  color: #f4f4f4;
  background-color: #090909
}
`

const htmlSkeleton = (WebsiteName:string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <h1>Welcome to ${WebsiteName}</h1>
	  <script src="index.js"></script>
  </body>
</html>
`

const jsSkeleton = `const test = 'hello from your new website'
  console.log(test)
`
export {cssSkeleton, htmlSkeleton, jsSkeleton}