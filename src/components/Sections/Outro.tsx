import star from "@/assets/main/star.svg";
import Image from "next/image";
import logo2 from "@/assets/logo2.svg";
import dogok from "@/assets/dogok.svg";

const gangnamWaterworksDirections =
  "https://map.naver.com/p/directions/-/14142821.061374294,4506700.330239718,%EA%B0%95%EB%82%A8%EC%88%98%EB%8F%84%EC%82%AC%EC%97%85%EC%86%8C,36438273,PLACE_POI/-/transit?c=14142821.061374294,4506700.330239718,15,0,0,0,dh";

export default function Outro() {
  return (
    <section id="outro">
      <div className="bg-brand-yellow-300">
        <Image
          src={star}
          alt="star"
          width={22}
          height={29}
          className="absolute top-0 left-0"
        />
        <Image
          src={star}
          alt="star"
          width={22}
          height={29}
          className="absolute top-0 right-0"
        />
        <p className="text-center font-bold text-brand-brown-700 font-warhaven text-[calc(50*var(--px))] pt-[calc(78*var(--px))]">
          오시는 길
        </p>
        <div className="flex flex-row pb-[calc(85*var(--px))] pt-[calc(60*var(--px))] gap-[calc(102*var(--px))] px-[calc(360*var(--px))]">
          <div className="h-[calc(470*var(--px))] w-full bg-gray-100 rounded-[calc(24*var(--px))]"></div>
          <div className="shrink-0 ">
            <div className="w-fit bg-[#F7E8A8] px-[calc(39*var(--px))] py-[calc(8*var(--px))] whitespace-nowrap text-brand-brown-700 font-bold font-suit text-[calc(16*var(--px))] rounded-[calc(100*var(--px))]">
              대중교통 이용 시
            </div>
            <p className="whitespace-nowrap text-brand-brown-700 font-suit text-[calc(16*var(--px))] pt-[calc(20*var(--px))]">
              지하철: 매봉역 4번 출구 도보 10분 거리
              <br />
              버스: 4433, 강남02(마을) 영동2교 하차 후 도보 5분 거리
            </p>
            <a
              href={gangnamWaterworksDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[calc(50*var(--px))] block w-fit py-[calc(12*var(--px))] px-[calc(109*var(--px))] text-center text-white font-bold font-suit text-[calc(24*var(--px))] bg-brand-brown-700 rounded-[calc(100*var(--px))]"
            >
              길찾기
            </a>
          </div>
        </div>
      </div>
      <div className="items-end pl-[calc(360*var(--px))] bg-gray-100 py-[calc(42*var(--px))]">
        <div className="flex flex-row items-center gap-[calc(80*var(--px))]">
          <div>
            <Image src={logo2} alt="logo2" width={266} height={71} />
          </div>
          <div className="flex flex-col gap-[calc(10*var(--px))] font-suit text-[#797979] text-[calc(16*var(--px))]">
            <p className="font-semibold">도곡 메타세쿼이아 로드 페스타 시즌3</p>
            <p>
              상호 : (주)획기획
              <br />
              주소 : 서울 마포구 독막로 18, 3층
              <br />
              ©도곡 메타세쿼이아 로드 페스타 운영사무국. All rights reserved. |
              개인정보처리방침
            </p>
            <div className="flex flex-row items-center gap-[calc(19*var(--px))]">
              <p className="font-bold">
                주최 | 도곡메타세쿼이아 축제추진위원회
              </p>
              <Image src={dogok} alt="dogok" width={110} height={19} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
