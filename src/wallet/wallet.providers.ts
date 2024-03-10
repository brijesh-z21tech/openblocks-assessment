import { WALLET_REPOSITORY } from 'src/constants';
import { Wallet } from './entities/wallet.entity';

export const walletProviders = [
  {
    provide: WALLET_REPOSITORY,
    useValue: Wallet,
  },
];
