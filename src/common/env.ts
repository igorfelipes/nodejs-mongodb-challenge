// TODO: Add validation for env variables
export const getEnv = () => process.env.APP_ENV;
export const getJsonWebTokenSecret = () => process.env.JWT_SECRET;
export const getJsonWebTokenExpiresIn = () => process.env.JWT_EXPIRES_IN;
export const getNotificationApiURL = () => process.env.NOTIFICATION_API_URL;
export const getNotificationApiKey = () => process.env.NOTIFICATION_API_KEY;
export const getPaymentGatewayApiURL = () =>
  process.env.PAYMENT_GATEWAY_API_URL;
export const getPaymentGatewayApiToken = () =>
  process.env.PAYMENT_GATEWAY_API_TOKEN;
export const getPaymentGatewayApiAccountId = () =>
  process.env.PAYMENT_GATEWAY_API_ACCOUNT_ID;
export const getAwsAccessKeyId = () => process.env.AWS_ACCESS_KEY_ID;
export const getAwsSecretAccessKey = () => process.env.AWS_SECRET_ACCESS_KEY;
export const getAwsRegion = () => process.env.AWS_REGION;
export const getAwsBucket = () => process.env.AWS_BUCKET_NAME;
export const getMailFrom = () => process.env.MAIL_FROM;
export const getMailAwsRegion = () => process.env.MAIL_AWS_REGION
export const getMailAwsAccessKey = () => process.env.MAIL_AWS_ACCESS_KEY
export const getMailAwsSecretKey = () => process.env.MAIL_AWS_SECRET_KEY
