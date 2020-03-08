import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Services: 'services',
          Users: 'users',
          Dashboard: 'dashboard',
          Events: 'events',
          Settings: 'settings',
        },
      },
    },
  });
}
