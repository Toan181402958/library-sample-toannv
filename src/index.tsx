import LibrarySampleToannv from './NativeLibrarySampleToannv';
import DeviceInfo from 'react-native-device-info';

export function multiply(a: number, b: number): number {
  return LibrarySampleToannv.multiply(a, b);
}

export function getInfoDevice() {
  return LibrarySampleToannv.getInfoDevice();
}

export function getDeviceId() {
  return DeviceInfo.getUniqueId();
}
