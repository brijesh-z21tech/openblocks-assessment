import { IsNotEmpty, IsString } from 'class-validator';

export class FindWalletDTO {
  @IsString()
  @IsNotEmpty()
  public wallet_address: string;

  @IsString()
  @IsNotEmpty()
  public from_date: string;

  @IsString()
  @IsNotEmpty()
  public to_date: string;
}
