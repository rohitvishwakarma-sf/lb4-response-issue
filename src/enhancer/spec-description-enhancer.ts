// import {
//   Application,
//   CoreBindings,
//   inject,
//   injectable,
//   MetadataInspector,
// } from '@loopback/core';
// import {
//   asSpecEnhancer,
//   getControllerSpec,
//   OASEnhancer,
//   OpenAPIObject,
//   OpenApiSpec,
//   RestEndpoint,
// } from '@loopback/rest';

// @injectable(asSpecEnhancer)
// export class DescSpecEnhancer implements OASEnhancer {
//   @inject(CoreBindings.APPLICATION_INSTANCE) private readonly app: Application;
//   name = 'info';
//   modifySpec(spec: OpenAPIObject): OpenApiSpec {
//     const DescPatchSpec = {
//       info: {title: 'LoopBack Test Application', version: '1.0.1'},
//     };
//     const l = this.app.find(`${CoreBindings.CONTROLLERS}.*`);
//     for (const b of l) {
//       const controllerName = b.key.replace(/^controllers\./, '');
//       const ctor = b.valueConstructor;
//       if (ctor) {
//         const apiSpec = getControllerSpec(ctor);
//         let endpoints = MetadataInspector.getAllMethodMetadata<RestEndpoint>(
//           'openapi-v3:methods',
//           ctor.prototype,
//         );
//         for (const route in endpoints) {
//           const routeData = endpoints[route];
//           if (
//             routeData.spec &&
//             routeData.spec.description &&
//             !spec.paths[routeData.path][routeData.verb].description
//           ) {
//             spec.paths[routeData.path][routeData.verb].description =
//               routeData.spec.description;
//           }
//         }
//       }
//     }

//     return spec;
//   }
// }
