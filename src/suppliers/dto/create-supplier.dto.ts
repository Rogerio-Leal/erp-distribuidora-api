import { IsString, IsEmail, IsOptional, IsEnum, IsBoolean, IsNotEmpty } from 'class-validator';
import { PersonType } from '@prisma/client';

export class CreateSupplierDto {
    @IsString({ message: 'A Razão Social é obrigatória' })
    @IsNotEmpty()
    companyName: string;

    @IsString()
    @IsOptional()
    tradeName?: string;

    @IsString({ message: 'O documento (CNPJ/CPF) é obrigatório' })
    @IsNotEmpty()
    document: string;

    @IsEnum(PersonType, { message: 'O tipo deve ser PF ou PJ' })
    @IsOptional()
    type?: PersonType;

    @IsEmail({}, { message: 'Forneça um e-mail válido' })
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    contact?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}