import { Injectable } from '@nestjs/common';
import { CreateGunasoDto } from './dto /gunaso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GunasoService {
  constructor(private prisma: PrismaService) {}
  async create(createGunasoDto: CreateGunasoDto) {
    return this.prisma.gunaso.create({
      data: {
        fullName: createGunasoDto.fullName,
        categoryId: createGunasoDto.categoryId,
        category: createGunasoDto.category,
        gunasoText: createGunasoDto.gunasoText,
        date: new Date(createGunasoDto.date),
        severity: createGunasoDto.severity,
      },
    });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async remove(id: string) {
    return this.prisma.gunaso.delete({
      where: { id: Number(id) },
    });
  }
}
