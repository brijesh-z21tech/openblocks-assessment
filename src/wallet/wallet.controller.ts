import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  Version,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { FindWalletDTO } from './dto/find-wallet.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Version('1')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiQuery({ name: 'wallet_address' })
  @ApiQuery({ name: 'from_date' })
  @ApiQuery({ name: 'to_date' })
  @Get()
  findByQuery(@Query() query: FindWalletDTO) {
    return this.walletService.findRecordByWalletAddress(
      query.wallet_address,
      query.from_date,
      query.to_date,
    );
  }
  @Version('2')
  @ApiQuery({ name: 'wallet_address' })
  @ApiQuery({ name: 'from_date' })
  @ApiQuery({ name: 'to_date' })
  @UsePipes(new ValidationPipe({ transform: true }))
  @Get('/:wallet_address/:from_date/:to_date')
  findByParams(@Param() params: FindWalletDTO) {
    return this.walletService.findRecordByWalletAddress(
      params.wallet_address,
      params.from_date,
      params.to_date,
    );
  }
}
