import Image from "next/image";
import VenueMap from "@/components/VenueMap";
import logo2 from "@/assets/logo2.svg";
import dogok from "@/assets/dogok.svg";

function BrownStar({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 46 59"
      aria-hidden
      className={`absolute h-[29px] w-[22px] text-brand-brown-700 ${className}`}
    >
      <path
        d="M22.6441 57.5841C22.2567 57.5841 21.931 57.3023 21.8694 56.9238L18.3217 34.5452L1.38401 30.3106C1.02307 30.2226 0.776581 29.8881 0.785385 29.5183C0.802991 29.1486 1.07589 28.8316 1.44564 28.7788L19.0259 25.9705L21.8606 1.4966C21.9046 1.10044 22.2391 0.801117 22.6441 0.801117C23.0402 0.801117 23.3748 1.10044 23.4276 1.4966L26.2623 25.9705L43.8425 28.7788C44.2123 28.8404 44.4852 29.1486 44.5028 29.5183C44.5204 29.8881 44.2739 30.2226 43.9042 30.3106L26.9665 34.5452L23.4188 56.9238C23.3571 57.3023 23.0314 57.5841 22.6441 57.5841Z"
        fill="currentColor"
      />
      <path
        d="M22.6439 1.57584L25.5491 26.6484L43.7104 29.5535L26.2709 33.9113L22.6352 56.8006L18.9994 33.9113L1.55995 29.5535L19.7213 26.6484L22.6263 1.57584M22.6439 0C21.8428 0 21.1738 0.598642 21.0858 1.39096L18.3127 25.275L1.32224 27.9953C0.582764 28.1098 0.0369565 28.7348 0.00174312 29.4831C-0.0334702 30.2314 0.468326 30.8917 1.1902 31.0766L17.6172 35.1878L21.0858 57.0471C21.209 57.813 21.8693 58.3764 22.6352 58.3764C23.401 58.3764 24.0701 57.813 24.1845 57.0471L27.653 35.1878L44.0801 31.0766C44.802 30.8917 45.3038 30.2314 45.2685 29.4831C45.2333 28.7348 44.6875 28.1186 43.948 27.9953L26.9576 25.275L24.1845 1.39096C24.0965 0.598642 23.4186 0 22.6263 0H22.6439Z"
        fill="currentColor"
      />
    </svg>
  );
}

const gangnamWaterworksDirections =
  "https://map.naver.com/p/directions/-/14142821.061374294,4506700.330239718,%EA%B0%95%EB%82%A8%EC%88%98%EB%8F%84%EC%82%AC%EC%97%85%EC%86%8C,36438273,PLACE_POI/-/transit?c=14142821.061374294,4506700.330239718,15,0,0,0,dh";

export default function Outro() {
  return (
    <section id="outro">
      <div className="relative bg-brand-yellow-300">
        <BrownStar className="top-[calc(95.5*var(--px))] left-[calc(823*var(--px))]" />
        <BrownStar className="top-[calc(95.5*var(--px))] right-[calc(822*var(--px))]" />
        <p className="text-center font-bold text-brand-brown-700 font-warhaven text-[calc(50*var(--px))] pt-[calc(78*var(--px))]">
          오시는 길
        </p>
        <div className="flex flex-row pb-[calc(85*var(--px))] pt-[calc(60*var(--px))] gap-[calc(102*var(--px))] px-[calc(360*var(--px))]">
          <VenueMap />
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
              <Image
                src={dogok}
                alt="dogok"
                width={111}
                height={20}
                className="h-auto w-[calc(111*var(--px))]"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
