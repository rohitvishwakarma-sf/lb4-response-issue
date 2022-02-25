// import {inject} from '@loopback/context';
// import {
//   FindRoute,
//   InvokeMethod,
//   ParseParams,
//   Reject,
//   RequestContext,
//   Send,
//   SequenceActions,
//   SequenceHandler,
// } from '@loopback/rest';
// import {HelmetAction, HelmetSecurityBindings} from 'loopback4-helmet';

// export class MySequence implements SequenceHandler {
//   constructor(
//     @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
//     @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
//     @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
//     @inject(SequenceActions.SEND) public send: Send,
//     @inject(SequenceActions.REJECT) public reject: Reject,
//     @inject(HelmetSecurityBindings.HELMET_SECURITY_ACTION)
//     protected helmetAction: HelmetAction,
//   ) {}
//   async handle(context: RequestContext) {
//     const requestTime = Date.now();
//     try {
//       const {request, response} = context;
//       const route = this.findRoute(request);
//       const args = await this.parseParams(request, route);
//       // Helmet Action here
//       await this.helmetAction(request, response);
//       const result = await this.invoke(route, args);
//       this.send(response, result);
//     } catch (err) {
//       // ...
//     } finally {
//       // ...
//     }
//   }
// }

import {MiddlewareSequence} from '@loopback/rest';

export class MySequence extends MiddlewareSequence {}
