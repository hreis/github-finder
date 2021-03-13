// import { Application, Request, Response } from 'express';
// import { IS_PRODUCTION } from "./secrets";
// import logger from "./logger";

// export function loadErrorHandlers(error) {

//   if (error.message.includes('404')) {
//     return Response.status(404).json({
//       message: error.message || 'Not Found.'
//     })
//   }
//   else {
//     return response.status(400).json({
//       message: error.message || 'Unexpected error.'
//     })
//   }

//   //   logger.error(err);
//   //   res.status(err.status || 500);
//   //   res.json({
//   //     errors: {
//   //       message: err.message,
//   //       error  : !IS_PRODUCTION ? err : {}
//   //     }
//   //   });
//   // });

// }