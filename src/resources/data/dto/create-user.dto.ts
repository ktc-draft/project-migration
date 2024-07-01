import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({
        example: "Ivanov@mail.ru"
      })
    @IsEmail()
  email: string;

  @ApiProperty({
    example: "Ivan"    
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: "Ivanov"    
  })
  @IsNotEmpty()
  lastName: string;
}