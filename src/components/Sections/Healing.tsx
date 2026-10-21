import Image from "next/image";
import BookChapter from "./BookChapter";
import maple from "@/assets/main/maple/maple_1.svg";
import yellowMaple from "@/assets/main/maple/yellow-big.svg";
import bookAndShelf from "@/assets/bookAndbookshelf.svg";
import animalForest from "@/assets/animal.svg";
import boy from "@/assets/boy.svg";
import bag from "@/assets/bag.svg";

function TitleStar() {
  return (
    <svg
      viewBox="0 0 46 59"
      aria-hidden
      className="inline-block h-auto w-[calc(11*var(--px))] shrink-0 text-brand-brown-700"
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

function ArticleTitle({ children }: { children: string }) {
  return (
    <h3 className="flex items-center justify-center gap-[calc(6*var(--px))] text-[calc(24*var(--px))] font-bold">
      <TitleStar />
      {children}
      <TitleStar />
    </h3>
  );
}

const writingContest = [
  { label: "참가 대상", value: "미취학 아동 · 초등 저학년 · 초등 고학년" },
  { label: "모집 인원", value: "총 40명 (회차별 20명)" },
  { label: "창작 형식", value: "시, 산문 등 자유 창작" },
  { label: "프로그램 일정", value: "1회차 | 14:00~15:00\n2회차 | 15:00~16:00" },
  {
    label: "시상 안내",
    value:
      "부문별 3명 선정 (총 9명)\n(미취학 아동 · 초등 저학년 · 초등 고학년 부문)",
  },
];

export default function Healing() {
  return (
    <div className="healing-scene relative text-brand-brown-700">
      <BookChapter
        id="healing"
        chapter={5}
        title="HEALING : 힐링 프로그램"
        cover="#FFE7AF"
        description={
          <>
            메타세쿼이아 길에서 잠시 쉬어가며
            <br />
            여유와 쉼을 담아가는 한 페이지를 만나보세요.
          </>
        }
      >
        <Image
          src={yellowMaple}
          alt=""
          className="animate-maple maple-delay-1 pointer-events-none absolute right-[calc(175*var(--px))] -top-[calc(20*var(--px))] z-20 h-auto w-[calc(55*var(--px))]"
        />
        <Image
          src={maple}
          alt=""
          className="animate-maple maple-delay-2 maple-reverse pointer-events-none absolute -left-[calc(130*var(--px))] top-[calc(430*var(--px))] z-20 h-auto w-[calc(65*var(--px))]"
        />
      </BookChapter>
      <div aria-label="힐링 프로그램" tabIndex={0} className="healing-cards absolute top-[calc(264.5*var(--px))] left-[calc((366+142)*var(--px))] z-10 w-[calc(912*var(--px))] snap-x snap-proximity overflow-x-auto overflow-y-hidden font-suit">
        <div className="flex w-max gap-[calc(16*var(--px))]">
          <article className="flex w-[calc(400*var(--px))] shrink-0 snap-start min-h-[calc(390*var(--px))] flex-col items-center rounded-[calc(12*var(--px))] bg-[#FFF5E0] px-[calc(25*var(--px))] py-[calc(30*var(--px))] text-center">
            <ArticleTitle>야외도서관</ArticleTitle>
            <div
              aria-hidden="true"
              className="relative my-[calc(32*var(--px))] h-[calc(165*var(--px))] w-[calc(260*var(--px))]"
            >
              <Image
                src={bookAndShelf}
                alt=""
                className="absolute inset-x-0 top-0 h-auto w-full"
              />
            </div>
            <p className="mt-auto text-[calc(16*var(--px))] leading-relaxed">
              책과 함께 쉬어가는 시간
              <br />
              나만의 가을을 읽어보세요.
            </p>
          </article>
          <article className="flex w-[calc(400*var(--px))] shrink-0 snap-start min-h-[calc(390*var(--px))] flex-col rounded-[calc(12*var(--px))] bg-[#FFF5E0] px-[calc(25*var(--px))] py-[calc(30*var(--px))]">
            <ArticleTitle>어린이 백일장</ArticleTitle>
            <dl className="my-[calc(28*var(--px))] flex flex-col gap-[calc(14*var(--px))] font-bold text-[calc(14*var(--px))] leading-relaxed">
              {writingContest.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-[calc(6*var(--px))]"
                >
                  <dt className="w-fit shrink-0 rounded-[calc(4*var(--px))] bg-brand-brown-700 px-[calc(6*var(--px))] text-[calc(14*var(--px))] font-medium text-white">
                    {label}
                  </dt>
                  <dd className="px-[calc(6*var(--px))] text-[calc(14*var(--px))] font-medium text-brand-brown-700 whitespace-pre-line">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="https://docs.google.com/forms/d/1N-Y_ozLPh3jO5VSUupoGjGuXqLfv1-rCpzWN1Bkyk0A/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-auto rounded-[calc(6*var(--px))] bg-brand-brown-700 py-[calc(8*var(--px))] text-center text-[calc(16*var(--px))] text-white font-bold font-suit">
                사전 신청하기
              </p>
            </a>
          </article>
          <article className="relative flex w-[calc(400*var(--px))] shrink-0 snap-start min-h-[calc(390*var(--px))] flex-col items-center rounded-[calc(12*var(--px))] bg-[#FFF5E0] px-[calc(25*var(--px))] py-[calc(30*var(--px))] text-center">
            <Image
              src={animalForest}
              alt=""
              className="absolute inset-x-0 top-0 h-auto w-full"
            />
          </article>
        </div>
      </div>
      <Image
        src={boy}
        alt=""
        className="absolute bottom-[calc(150*var(--px))] w-[calc(375*var(--px))] h-auto left-[calc(276*var(--px))]"
      />
      <Image
        src={bag}
        alt=""
        className="absolute bottom-[calc(150*var(--px))] w-[calc(194*var(--px))] h-auto left-[calc(1468*var(--px))]"
      />
    </div>
  );
}
