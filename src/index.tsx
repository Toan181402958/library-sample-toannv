import LibrarySampleToannv from './NativeLibrarySampleToannv';
import { getDeviceId } from 'react-native-device-info';

export function multiply(a: number, b: number): number {
  return LibrarySampleToannv.multiply(a, b);
}

export function getInfoDevice() {
  const deviceId = getDeviceId();
  console.log('Device ID: ', deviceId);
  return LibrarySampleToannv.getInfoDevice();
}
