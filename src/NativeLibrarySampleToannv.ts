import { TurboModuleRegistry, type TurboModule } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  getInfoDevice(): Promise<{ brand: string; model: string }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('LibrarySampleToannv');
