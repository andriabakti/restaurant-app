import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class OrderCreationDto {
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  readonly items: OrderItem[];
}

class OrderItem {
  @IsNotEmpty()
  @IsString()
  foodId: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
