import { Inject, Injectable } from '@nestjs/common';
import { Wallet } from './entities/wallet.entity';
import { WALLET_REPOSITORY } from 'src/constants';
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class WalletService {
  constructor(
    @Inject(WALLET_REPOSITORY)
    private readonly walletrepository: typeof Wallet,
  ) {}

  async findAll() {
    return await this.walletrepository.findAll<Wallet>();
  }

  async findRecordByWalletAddress(wallet_address, from_date, to_date) {
    return await this.walletrepository.findAll<Wallet>({
      attributes: [
        'wallet_address',
        ['date', 'from_date'],
        ['date', 'to_date'],
        [Sequelize.fn('SUM', Sequelize.col('point_value')), 'total_points'],
      ],
      where: {
        wallet_address,
        date: {
          [Op.between]: [from_date, to_date],
        },
      },
      group: ['wallet_address', 'date'],
    });
  }
}
