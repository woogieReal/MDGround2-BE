import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Tree extends BaseEntity {
  @PrimaryColumn()
  user: string;

  @PrimaryColumn()
  id: number;

  @Column({ enum: [10, 20] })
  type: number;

  @Column({ length: 100, default: 'woogieOndAndOn' })
  name: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ default: 0 })
  parent: number;

  @Column({ length: 1, default: 'N' })
  delete_yn: string;

  @Column({ type: 'date', nullable: true })
  deleted_date: string;

  @Column({ default: 1 })
  seq: number;
}
