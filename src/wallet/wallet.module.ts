import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { walletProviders } from './wallet.providers';

@Module({
  controllers: [WalletController],
  providers: [WalletService, ...walletProviders],
})
export class WalletModule {}
