import Image from "next/image";
import BookChapter from "./BookChapter";
import guitar from "@/assets/main/guitar.svg";
import note from "@/assets/main/music-sm.svg";
import maple from "@/assets/main/maple/big.svg";
import tag from "@/assets/program/tag.png";
import speaker from "@/assets/program/speaker.png";
import musicSm2 from "@/assets/main/music-sm2.svg";
import music from "@/assets/main/music.svg";
import mik from "@/assets/mik.svg";
import sing from "@/assets/sing.svg";

// 시안에 표시된 시간표. 확정 프로그램 변경 시 이 목록을 수정합니다.
const schedule = [
  ["12:00~12:30", "코지재즈오피스", ""],
  ["12:30~13:00", "목일", ""],
  ["13:30~14:00", "", "매직&벌룬쇼"],
  ["14:00~14:30", "개막식", ""],
  ["14:30~15:00", "장의현 퀄텟", ""],
  ["15:15~15:45", "015B", ""],
  ["16:00~16:30", "매직&벌룬쇼", ""],
  ["16:30~17:00", "첼로가 노래하는 진스", ""],
];

export default function Music() {
  return (
    <div className="music-scene relative">
      <BookChapter
        id="music"
        chapter={4}
        title="MUSIC : 공연"
        cover="#C6BBE4"
        description={
          <>
            마음을 울리는 음악과 공연으로
            <br />
            가을의 한 페이지를 함께 채워보세요.
          </>
        }
      >
        <div className="music-schedule relative ml-[calc(219*var(--px))] mt-[calc(35*var(--px))] w-[calc(660*var(--px))]">
          <table className="w-full table-fixed border-collapse text-center font-suit text-[calc(18*var(--px))] leading-[calc(24*var(--px))] text-[#392B28]">
            <caption className="sr-only">공연 시간표</caption>
            <colgroup>
              <col className="w-[calc(180*var(--px))]" />
              <col className="w-[calc(240*var(--px))]" />
              <col className="w-[calc(240*var(--px))]" />
            </colgroup>
            <thead className="bg-[#D3C7F2] text-[#422C81]">
              <tr>
                {["시간", "메인 무대", "클램프 갤러리 앞"].map((label) => (
                  <th
                    key={label}
                    scope="col"
                    className="h-[calc(40*var(--px))] p-0 align-middle font-bold font-suit text-[calc(20*var(--px))] last:bg-[#E5E9FD]"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map(([time, main, plaza]) => (
                <tr
                  key={time}
                  className="border-b border-[#E0E0E0] bg-white even:[&>th]:bg-[#FBF9FF] even:[&>td:nth-child(2)]:bg-[#FBF9FF]"
                >
                  <th
                    scope="row"
                    className="h-[calc(48*var(--px))] p-0 align-middle font-bold font-suit text-[calc(20*var(--px))]"
                  >
                    {time}
                  </th>
                  <td className="p-0 align-middle text-[calc(20*var(--px))] font-bold font-suit">
                    {main || ""}
                  </td>
                  <td
                    className={`p-0 align-middle text-[calc(20*var(--px))] font-bold font-suit ${
                      plaza ? "bg-[#F3F5FF]" : "bg-white"
                    }`}
                  >
                    {plaza || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Image
          src={tag}
          alt=""
          className="performer-tag pointer-events-none absolute -top-[calc(12*var(--px))] right-[calc(10*var(--px))] h-auto w-[calc(300*var(--px))]"
        />
        <Image
          src={guitar}
          alt=""
          className="pointer-events-none absolute right-[calc(70*var(--px))] top-[calc(730*var(--px))] h-auto w-[calc(110*var(--px))]"
        />
        <Image
          src={note}
          alt=""
          width={320}
          height={512}
          style={{ height: "auto" }}
          className="animate-note note-delay-2 pointer-events-none absolute -right-[calc(150*var(--px))] top-[calc(600*var(--px))] h-auto w-[calc(32*var(--px))]"
        />
        <Image
          src={maple}
          alt=""
          className="animate-maple pointer-events-none absolute left-0 -top-[calc(15*var(--px))] ml-[calc((488-366)*var(--px))] h-auto w-[calc(60*var(--px))]"
        />
      </BookChapter>
      <Image
        src={musicSm2}
        alt=""
        className="animate-note note-delay-1 pointer-events-none absolute right-[calc(289*var(--px))] top-[calc(542*var(--px))] h-auto w-[calc(27*var(--px))]"
      />
      <Image
        src={music}
        alt=""
        className="animate-note pointer-events-none absolute left-[calc(257*var(--px))] top-[calc(542*var(--px))] h-auto w-[calc(42*var(--px))]"
      />
      <Image
        src={speaker}
        alt=""
        className="pointer-events-none absolute left-0 top-[calc(710*var(--px))] z-10 h-auto w-[calc(88*var(--px))] ml-[calc(202*var(--px))]"
      />
      <Image
        src={speaker}
        alt=""
        className="pointer-events-none absolute right-0 top-[calc(710*var(--px))] z-10 h-auto w-[calc(88*var(--px))] mr-[calc(217*var(--px))]"
      />
      <Image
        src={mik}
        alt=""
        className="absolute bottom-[calc(150*var(--px))] w-[calc(32*var(--px))] h-auto left-[calc(340*var(--px))]"
      />
      <Image
        src={sing}
        alt=""
        className="absolute bottom-[calc(200*var(--px))] left-[calc(430*var(--px))] h-auto w-[calc(118*var(--px))]"
      />
    </div>
  );
}
