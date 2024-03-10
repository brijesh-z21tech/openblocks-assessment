import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Wallet extends Model<Wallet> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  wallet_address: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  point_value: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  month: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  day: number;
}
