// Geo builder function
import { Google } from "@simple/types";
import { utils } from "artisn-rn/builders";

const { genWords, genId, chooseRandom, genNumber } = utils;

export const buildAddressComponent = (
  overrides: Partial<Google.AddressComponent> = {}
): Google.AddressComponent => {
  return {
    long_name: genWords(7),
    short_name: genWords(4),
    types: ["street_number", "route"],
    ...overrides
  };
};

export const genAddressComponents = (
  quantity?: number
): Google.AddressComponent[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const addressComponents = [];
  for (let i = 0; i < num; i++) {
    const addressComponent = buildAddressComponent();
    addressComponents.push(addressComponent);
  }
  return addressComponents;
};

export const buildViewport = (
  overrides: Partial<Google.Viewport> = {}
): Google.Viewport => {
  return {
    northeast: buildCoordinates(),
    southwest: buildCoordinates(),
    ...overrides
  };
};

export const genViewport = (quantity?: number): Google.Viewport[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const viewports = [];
  for (let i = 0; i < num; i++) {
    const viewport = buildViewport();
    viewports.push(viewport);
  }
  return viewports;
};

export const buildGeometry = (
  overrides?: Partial<Google.Geometry>
): Google.Geometry => {
  return {
    location: buildCoordinates(),
    location_type: chooseRandom(["ROOFTOP", "GEOMETRIC_CENTER"]),
    viewport: buildViewport(),
    ...overrides
  };
};

export const genGeometries = (quantity?: number): Google.Geometry[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const geometries = [];
  for (let i = 0; i < num; i++) {
    const geometry = buildGeometry();
    geometries.push(geometry);
  }
  return geometries;
};

export const buildGeocode = (
  overrides: Partial<Google.Geocode> = {}
): Google.Geocode => {
  const addressType: Google.AddressType[] = [
    "establishment",
    "food",
    "point_of_interest",
    "restaurant"
  ];

  return {
    formatted_address: genWords(5),
    place_id: genId(),
    address_components: genAddressComponents(),
    geometry: buildGeometry(),
    type: [chooseRandom(addressType)],
    ...overrides
  };
};

export const genGeocode = (quantity?: number): Google.Geocode[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const geoCodes = [];
  for (let i = 0; i < num; i++) {
    const geocode = buildGeocode();
    geoCodes.push(geocode);
  }
  return geoCodes;
};

export const buildAutocompleteResult = (
  overrides: Partial<Google.AutocompleteResult> = {}
): Google.AutocompleteResult => {
  const addressComponentType: Google.AddressComponentType[] = [
    "street_number",
    "route",
    "political",
    "neighborhood",
    "country",
    "locality",
    "postal_code",
    "administrative_area_level_1",
    "administrative_area_level_2",
    "administrative_area_level_3"
  ];

  const matchedSubstring: Google.MatchedSubstring[] = [
    {
      length: genNumber(),
      offset: genNumber()
    }
  ];

  const structuredFormatting: Google.StructuredFormatting = {
    main_text: genWords(5),
    main_text_matched_substrings: matchedSubstring,
    secondary_text: genWords(5)
  };

  const terms: Google.Term[] = [
    {
      offset: genNumber(),
      value: genWords(5)
    }
  ];

  return {
    description: genWords(5),
    matched_substrings: matchedSubstring,
    place_id: genId(),
    reference: genWords(5),
    structured_formatting: structuredFormatting,
    terms,
    types: [chooseRandom(addressComponentType)],
    ...overrides
  };
};

export const genAutocompleteResult = (
  quantity?: number
): Google.AutocompleteResult[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const autocompleteResults = [];
  for (let i = 0; i < num; i++) {
    const autocompleteResult = buildAutocompleteResult();
    autocompleteResults.push(autocompleteResult);
  }
  return autocompleteResults;
};

export const buildPlusCode = (
  overrides?: Partial<Google.PlusCode>
): Google.PlusCode => {
  return {
    compound_code: genWords(5),
    global_code: genWords(3),
    ...overrides
  };
};

export const genPlusCode = (quantity?: number): Google.PlusCode[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const plusCodes = [];
  for (let i = 0; i < num; i++) {
    const plusCode = buildPlusCode();
    plusCodes.push(plusCode);
  }
  return plusCodes;
};

export const buildCoordinates = (
  overrides?: Partial<Google.Coordinates>
): Google.Coordinates => {
  return {
    lat: genNumber(),
    lng: genNumber(),
    ...overrides
  };
};

export const genCoordinates = (quantity?: number): Google.Coordinates[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const coordinates = [];
  for (let i = 0; i < num; i++) {
    const coordinate = buildCoordinates();
    coordinates.push(coordinate);
  }
  return coordinates;
};

export const buildReverseGeocodeAddress = (
  overrides: Partial<Google.ReverseGeocodeAddress> = {}
): Google.ReverseGeocodeAddress => {
  return {
    ...buildGeocode(),
    plus_code: buildPlusCode(),
    ...overrides
  };
};

export const genReverseGeocodeAddresses = (
  quantity?: number
): Google.ReverseGeocodeAddress[] => {
  const num = quantity ?? Math.floor(Math.random() * 9) + 1;

  const geocodeAddresses = [];
  for (let i = 0; i < num; i++) {
    const geocodeAddress = buildReverseGeocodeAddress();
    geocodeAddresses.push(geocodeAddress);
  }
  return geocodeAddresses;
};
