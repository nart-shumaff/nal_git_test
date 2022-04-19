import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjcteService } from "./projcte.service";
import { ProjcteControllerBase } from "./base/projcte.controller.base";

@swagger.ApiTags("projctes")
@common.Controller("projctes")
export class ProjcteController extends ProjcteControllerBase {
  constructor(
    protected readonly service: ProjcteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
