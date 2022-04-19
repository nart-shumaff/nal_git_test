import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProjcteServiceBase } from "./base/projcte.service.base";

@Injectable()
export class ProjcteService extends ProjcteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
