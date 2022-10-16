import { BaseEntity, Column, PrimaryColumn } from 'typeorm';

export class Tree extends BaseEntity {
  @PrimaryColumn()
  user: string;

  @PrimaryColumn()
  id: number;

  @Column({ enum: [10, 20] })
  type: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  parent: number;

  @Column({ length: 1, default: 'N' })
  delete_yn: string;

  @Column({ type: 'date' })
  deleted_date: string;

  @Column({ default: 1 })
  seq: number;
}
