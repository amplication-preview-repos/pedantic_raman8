import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceService } from "./service.service";
import { ServiceControllerBase } from "./base/service.controller.base";

@swagger.ApiTags("services")
@common.Controller("services")
export class ServiceController extends ServiceControllerBase {
  constructor(protected readonly service: ServiceService) {
    super(service);
  }
}
