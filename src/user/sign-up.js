import AWS from "aws-sdk";

export const handler = async (event, context) => {
  const body = event.body;
  let response = {};
  console.log("handler called ******", body);
  try {
    // register user
    const data = await registerUser(body.email, body.password);
    response = {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(">>>>>>", error);
    response = {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
  return response;
};

const registerUser = async (email, password) => {
  console.log("registerUser called....");
  const cognitoidentityserviceprovider =
    new AWS.CognitoIdentityServiceProvider();
  console.log(
    "cognitoidentityserviceprovider....",
    cognitoidentityserviceprovider
  );
  const params = {
    UserPoolId: "ap-southeast-1_yGWsmtXUq",
    TemporaryPassword: password,
    Username: email,
    UserAttributes: [
      {
        Name: "email_verified",
        Value: "true",
      },
    ],
  };

  const data = await cognitoidentityserviceprovider
    .adminCreateUser(params)
    .promise();
  console.log("User registered successfully:", data);
  return data.UserSub;
};
