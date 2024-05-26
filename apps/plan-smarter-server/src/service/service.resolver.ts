import * as graphql from "@nestjs/graphql";
import { ServiceResolverBase } from "./base/service.resolver.base";
import { Service } from "./base/Service";
import { ServiceService } from "./service.service";

@graphql.Resolver(() => Service)
export class ServiceResolver extends ServiceResolverBase {
  constructor(protected readonly service: ServiceService) {
    super(service);
  }
}
