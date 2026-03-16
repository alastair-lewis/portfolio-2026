interface BookingParams {
  origin: string;
  destination: string;
  departureDate: Date;
  adults?: number;
  tripType?: 'OneWay' | 'RoundTrip';
}

function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export function generateGenesisUrl({
  origin,
  destination,
  departureDate,
  adults = 1,
  tripType = 'OneWay',
}: BookingParams): string {
  const params = new URLSearchParams({
    org0: origin,
    dest0: destination,
    orgType0: 'A',
    destType0: 'A',
    departureDate0: formatDate(departureDate),
    adt: String(adults),
    yth: '0',
    chd: '0',
    inf: '0',
    ins: '0',
    marketCode: 'DOM',
    tripType,
    isFlexible: 'false',
  });

  return `https://www.aircanada.com/booking/ca/en/aco/search?${params}`;
}
