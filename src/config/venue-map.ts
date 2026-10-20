// 브라우저에 공개되는 JavaScript Maps Client ID(ncpKeyId)만 입력합니다.
// Client Secret은 이 파일에 넣지 않습니다.
export const NAVER_MAP_CLIENT_ID =
  process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID ?? "ji103u2v0s";

export const VENUE_MAP_LINK =
  "https://map.naver.com/p/search/강남수도사업소삼거리";

// 기존 길찾기 건물 좌표(37.4833851, 127.0471232)와 시안을 기준으로 한 임시 위치.
// 삼거리 공유 링크를 받은 뒤 핀과 행사 구간의 실제 좌표를 최종 확인해야 합니다.
export const VENUE_MAP = {
  marker: { lat: 37.48315, lng: 127.0475 },
  route: [
    { lat: 37.4816946406519, lng: 127.04512 },
    { lat: 37.48315, lng: 127.0475 },
  ],
} as const;
