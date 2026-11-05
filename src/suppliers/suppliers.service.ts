import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSupplierDto: CreateSupplierDto) {
    const supplierExists = await this.prisma.supplier.findUnique({
      where: { document: createSupplierDto.document },
    });

    if (supplierExists) {
      throw new ConflictException('Já existe um fornecedor registado com este documento (CNPJ/CPF).');
    }

    return this.prisma.supplier.create({
      data: createSupplierDto,
    });
  }

  async findAll() {
    return this.prisma.supplier.findMany({
      orderBy: { companyName: 'asc' },
    });
  }

  async findOne(id: string) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { id },
    });

    if (!supplier) {
      throw new NotFoundException('Fornecedor não encontrado.');
    }

    return supplier;
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    await this.findOne(id);

    return this.prisma.supplier.update({
      where: { id },
      data: updateSupplierDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.supplier.delete({
      where: { id },
    });
  }
}