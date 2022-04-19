import { Module } from "@nestjs/common";
import { ProjcteModuleBase } from "./base/projcte.module.base";
import { ProjcteService } from "./projcte.service";
import { ProjcteController } from "./projcte.controller";
import { ProjcteResolver } from "./projcte.resolver";

@Module({
  imports: [ProjcteModuleBase],
  controllers: [ProjcteController],
  providers: [ProjcteService, ProjcteResolver],
  exports: [ProjcteService],
})
export class ProjcteModule {}
