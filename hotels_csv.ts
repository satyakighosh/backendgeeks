import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class hotels_csv extends BaseEntity{
    @Column()
    name: string;
    @Column()
    cuisines: string;
    @Column()
    featured_image: string;
    @PrimaryGeneratedColumn()
    id: string;

}