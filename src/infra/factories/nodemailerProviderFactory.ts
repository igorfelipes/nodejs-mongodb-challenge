
// import { SES } from '@aws-sdk/client-ses'
// import { getMailAwsAccessKey, getMailAwsRegion, getMailAwsSecretKey } from '../../common/env'
// import { NodemailerMailProvider } from "../mail/nodemailerMailProvider";

// export const makeNodemailerProvider = (): NodemailerMailProvider => {
//   const sesClient = new SES({
//     region: getMailAwsRegion(),
//     apiVersion: "2010-12-01",
//     credentials: {
//       accessKeyId: getMailAwsAccessKey()!,
//       secretAccessKey: getMailAwsSecretKey()!
//     }
//   })
//   return new NodemailerMailProvider(sesClient);
// };
