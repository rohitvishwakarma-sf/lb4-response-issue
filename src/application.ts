import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import {AuthenticationServiceComponent} from '@sourceloop/authentication-service';
import {
  AuthorizationBindings,
  AuthorizationComponent,
} from 'loopback4-authorization';
import path from 'path';
// import {DescSpecEnhancer} from './enhancer/spec-description-enhancer';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class TestAuthExampleApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    // this.add(createBindingFromClass(DescSpecEnhancer));
    this.sequence(MySequence);
    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    // helmet end

    this.bind(AuthorizationBindings.CONFIG).to({
      allowAlwaysPaths: ['/explorer'],
    });
    // this.component(AuthorizationComponent);
    this.component(RestExplorerComponent);
    this.component(AuthenticationServiceComponent);
    // this.component(Loopback4HelmetComponent);
    // helmet;
    // this.bind(HelmetSecurityBindings.CONFIG).to({
    //   referrerPolicy: {
    //     policy: 'same-origin',
    //   },
    //   contentSecurityPolicy: {
    //     directives: {
    //       frameSrc: ["'self"],
    //     },
    //   },
    // });

    // const controllers = this.find(`${CoreBindings.CONTROLLERS}.*`);
    // console.log(controllers);
    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
