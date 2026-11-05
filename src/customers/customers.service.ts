import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCustomerDto: CreateCustomerDto) {

    const customerExists = await this.prisma.customer.findUnique({
      where: { document: createCustomerDto.document },
    });

    if (customerExists) {
      throw new ConflictException('Já existe um cliente registado com este documento (CPF/CNPJ).');
    }

    return this.prisma.customer.create({
      data: createCustomerDto,
    });
  }

  async findAll() {
    return this.prisma.customer.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
    });

    if (!customer) {
      throw new NotFoundException('Cliente não encontrado.');
    }

    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    await this.findOne(id);

    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.customer.delete({
      where: { id },
    });
  }
}