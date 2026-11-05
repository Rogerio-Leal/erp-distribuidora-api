import { IsString, IsEmail, IsOptional, IsEnum, IsBoolean, IsNotEmpty } from 'class-validator';
import { PersonType } from '@prisma/client';

export class CreateCustomerDto {
    @IsString({ message: 'O nome deve ser um texto' })
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    name: string;

    @IsString({ message: 'O documento (CPF/CNPJ) deve ser um texto' })
    @IsNotEmpty({ message: 'O documento é obrigatório' })
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