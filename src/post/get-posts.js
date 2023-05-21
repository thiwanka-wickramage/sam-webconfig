import axios from "axios";

export const handler = async (event) => {
  console.log("request: " + JSON.stringify(event));

  try {
    const res = await axios("https://jsonplaceholder.typicode.com/posts/1");
    let responseBody = {
      message: "get posts",
      input: res,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
