import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SensorData } from './sensor-data.schema';
import { Model } from 'mongoose';
import { SensorDataDto } from './sensor-data.dto';

@Injectable()
export class SensorDataService {
  constructor(
    @InjectModel(SensorData.name) private sensorDataModel: Model<SensorData>,
  ) {}

  async create(sensorDataDto: SensorDataDto): Promise<SensorData> {
    const createdCat = new this.sensorDataModel(sensorDataDto);
    return createdCat.save();
  }

  findAll(): Promise<SensorData[]> {
    return this.sensorDataModel.find().exec();
  }

  findLatestSensorData(
    plantId: string,
    sensorId: string,
  ): Promise<SensorData | null> {
    return this.sensorDataModel
      .findOne({ plant_id: plantId, sensor_id: sensorId })
      .sort({ createdAt: -1 })
      .exec();
  }
}
