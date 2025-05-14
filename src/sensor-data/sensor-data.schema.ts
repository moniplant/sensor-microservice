import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SensorDataDocument = HydratedDocument<SensorData>;

@Schema()
export class SensorData {
  @Prop()
  sensor_id: string;

  @Prop()
  plant_id: string;

  @Prop()
  ts: string;

  @Prop()
  value: string;
}

export const SensorDataSchema = SchemaFactory.createForClass(SensorData);
