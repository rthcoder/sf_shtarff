import { PrismaService } from '@prisma';
import { Injectable } from '@nestjs/common';
import { CheckFineIsExists, FineCreatedMessageDto } from '@interfaces'

@Injectable()
export class FinesService {
  constructor(private readonly prisma: PrismaService) { }

  async checkFineIsExists(data: CheckFineIsExists) {
    const finesExistsByInvoice = await this.prisma.fine.findFirst(
      {
        where: {
          pPlateNumber: data.drb_number,
          pInvoiceNumber: data.invoice_number
        }
      }
    )

    return {
      exists: finesExistsByInvoice ? true : false
    }
  }

  // async createManyFines(data: FineCreatedMessageDto[]) {
  //   await this.prisma.fine.createMany(
  //     {
  //       data: da
  //     }
  //   )
  // }
}
