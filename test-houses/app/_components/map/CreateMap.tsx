import React from 'react';
import {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, reactify} from './ymaps';
import { YMapLocationRequest } from '@yandex/ymaps3-types';


const LOCATION: YMapLocationRequest = {
  center: [37.588144, 55.733842],
  zoom: 9
};

export default function CreateMap() {
  return (
    <section>
      тут карта
      {/* <YMap location={reactify.useDefault(LOCATION)}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapMarker coordinates={reactify.useDefault([37.588144, 55.733842])} draggable={true}>
          <section>
            <h1>You can drag this header</h1>
          </section>
        </YMapMarker>
      </YMap> */}
    </section>
  );
}