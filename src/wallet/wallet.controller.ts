import { Controller, Get, Param, Version } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Version('1')
  @Get()
  findAllV1() {
    return this.walletService.findAll();
  }

  @Version('2')
  @Get('/:wallet_address/:from_date/:to_date')
  findAllV2(
    @Param('wallet_address') wallet_address: string,
    @Param('from_date') from_date: string,
    @Param('to_date') to_date: string,
  ) {
    return this.walletService.findRecordByWalletAddress(
      wallet_address,
      from_date,
      to_date,
    );
  }
}
