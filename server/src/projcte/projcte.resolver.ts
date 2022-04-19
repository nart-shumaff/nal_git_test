import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProjcteResolverBase } from "./base/projcte.resolver.base";
import { Projcte } from "./base/Projcte";
import { ProjcteService } from "./projcte.service";

@graphql.Resolver(() => Projcte)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjcteResolver extends ProjcteResolverBase {
  constructor(
    protected readonly service: ProjcteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
