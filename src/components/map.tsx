import {useEffect, useRef} from 'react';

import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {Offer, City} from '../types/offers.ts';

import {useMap} from '../hooks/useMap.tsx';

import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../constant/constant.ts';

type MapProps = {
  city: City;
  offers: Offer[];
  selectedCard: Offer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({city, offers, selectedCard}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedCard !== undefined && offer.id === selectedCard.id
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedCard]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export {Map};
