import {useEffect, useRef} from 'react';

import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {Offer, City} from '../types/offers.ts';

import {useMap} from '../hooks/useMap.tsx';

import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../constant/constant.ts';

type MapProps = {
  city: City | undefined;
  offers: Offer[];
  selectedCard: Offer | undefined;
  isNearlyOffersMap: boolean;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT
});

function Map({city, offers, selectedCard, isNearlyOffersMap}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const getMapType = (): string =>
    isNearlyOffersMap
      ? 'offer__map map'
      : 'cities__map map';

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        if (!isNearlyOffersMap) {
          marker
            .setIcon(
              selectedCard !== undefined && offer.id === selectedCard.id
                ? currentCustomIcon
                : defaultCustomIcon
            ).addTo(markerLayer);
        } else {
          marker
            .setIcon(defaultCustomIcon).addTo(markerLayer);
        }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedCard, isNearlyOffersMap]);


  return (
    <section
      className = {getMapType()}
      ref = {mapRef}
    >
    </section>
  );
}

export {Map};
