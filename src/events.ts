// SENSOR API - Kafka
// We listen to deletion of a sensor, and then delete all sensor data for that sensor
export const DELETE_SENSOR = 'sensor.delete';
// We listen to updates to a sensor, and then update all sensor data for that sensor in case the plant_id changes
export const UPDATE_SENSOR = 'sensor.update';
// We listen to deletion of a plant, and then delete all sensor data for that plant
export const DELETE_PLANT_SENSORS = 'sensors.plant.delete';

// SENSOR DATA API - MQTT
export const SAVE_SENSOR_DATA = 'sensor.data.save';
export const GET_LATEST_SENSOR_DATA = 'sensor.data.latest.get';
