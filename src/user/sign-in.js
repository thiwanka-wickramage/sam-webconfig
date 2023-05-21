export const handler = async (event) => {
  console.log("request: " + JSON.stringify(event));

  try {
    let responseBody = {
      message: "sign-in",
      input: event,
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
