import yellowLeaf from "@/assets/main/maple/yellow_two.svg";
import OpenBook from "@/components/OpenBook";
import food from "@/assets/program/food/food.svg";
import carPink from "@/assets/program/food/car-pink.svg";
import Image from "next/image";
import { food_1, food_2 } from "@/app/app.const";
import car from "@/assets/main/car.svg";
import girl from "@/assets/program/food/girl2.svg";
import food_group from "@/assets/program/food/food_group.svg";

export default function Food() {
  return (
    <section
      id="food"
      className="mobile-chapter section-target relative box-content min-h-[calc(1000*var(--px))] w-full bg-brand-green-300 pb-[calc(120*var(--px))]"
    >
      <div className="chapter-heading relative z-30 pt-[calc(65*var(--px))]">
        <p className="text-brand-brown-700 text-center font-suit text-[calc(18*var(--px))] font-bold">
          Chapter 3
        </p>
        <p className="text-brand-brown-700 text-center font-warhaven text-[calc(40*var(--px))] font-bold">
          FOOD : 먹거리
        </p>
        <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] pt-[calc(10*var(--px))] font-medium">
          맛있는 먹거리와 함께 가을의 풍경을
          <br />
          천천히 음미하는 한 페이지를 즐겨보세요.
        </p>
      </div>
      <Image
        src={food}
        alt=""
        className="absolute top-[calc(235*var(--px))] z-40 left-0 w-[calc(63*var(--px))] h-auto ml-[calc(717*var(--px))]"
      />
      <Image
        src={carPink}
        alt=""
        className="absolute top-[calc(253*var(--px))] z-40 left-0 w-[calc(84*var(--px))] h-auto ml-[calc(1138*var(--px))]"
      />
      <div className="chapter-paper absolute top-0 z-20 left-0 w-[calc(1185*var(--px))] h-auto ml-[calc(366*var(--px))]">
        <OpenBook
          cover="#BAE1F6"
          edge="#EEEAE3"
          star="#BAE1F6"
          className="absolute left-0 h-auto w-[calc(1185*var(--px))]"
        />
      </div>
      <div className="food-mobile-scroll" aria-label="먹거리 전체 부스 목록" tabIndex={0}>
        <div className="food-mobile-grid">
          {food_1.map((item, index) => {
            const columns = Math.ceil(food_1.length / 2);
            return (
              <div key={item.name} className="food-mobile-card" style={{ gridRow: Math.floor(index / columns) + 1, gridColumn: index % columns + 1 }}>
                <p>{item.name}</p>
              </div>
            );
          })}
          {food_2.map((item, index) => (
            <div key={item.name} className="food-mobile-card" style={{ gridRow: 3, gridColumn: index + 1 }}>
              <p>{item.name}</p>
              <span>{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="food-grids flex flex-row ml-[calc(562*var(--px))] mt-[calc(124*var(--px))] gap-[calc(60*var(--px))]">
        <div aria-label="먹거리 부스 목록" tabIndex={0} className="w-[calc(400*var(--px))] overflow-x-auto z-40 grid grid-flow-col snap-x snap-mandatory grid-rows-[repeat(3,calc(97*var(--px)))] items-start gap-x-[calc(12*var(--px))] gap-y-[calc(12*var(--px))]">
          {food_1.map((item) => (
            <div
              key={item.name}
              className="flex h-[calc(97*var(--px))] bg-[#E9F7FF] rounded-[calc(10*var(--px))] py-[calc(20*var(--px))] w-[calc(180*var(--px))] items-center justify-center"
            >
              <p className="text-brand-brown-700 text-center font-suit text-[calc(20*var(--px))] font-bold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div aria-label="푸드트럭 목록" tabIndex={0} className="z-40 grid grid-cols-2 grid-rows-[repeat(3,calc(97*var(--px)))] items-start gap-x-[calc(12*var(--px))] gap-y-[calc(12*var(--px))]">
          {food_2.map((item) => (
            <div
              key={item.name}
              className="h-[calc(97*var(--px))] bg-[#E9F7FF] rounded-[calc(10*var(--px))] py-[calc(20*var(--px))] w-[calc(180*var(--px))]"
            >
              <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] font-bold text-[calc(20*var(--px))]">
                {item.name}
              </p>
              <div className="mx-auto w-fit rounded-[calc(4*var(--px))] bg-[#67C7FA] px-[calc(6*var(--px))] py-[calc(2*var(--px))] text-center font-suit text-[calc(12*var(--px))] font-medium text-white mt-[calc(6*var(--px))]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={car}
        alt=""
        className="absolute top-[calc(740*var(--px))] z-40 left-0 w-[calc(250*var(--px))] h-auto ml-[calc(266*var(--px))] max-pc:w-[calc(90*var(--mobile-px))] max-pc:ml-[calc(53*var(--mobile-px))] max-pc:top-[calc(750*var(--mobile-px))]"
      />
      <Image
        src={girl}
        alt=""
        className="absolute top-[calc(880*var(--px))] z-40 left-0 w-[calc(93*var(--px))] h-auto ml-[calc(763*var(--px))] max-pc:w-[calc(45*var(--mobile-px))] max-pc:ml-[calc(280*var(--mobile-px))] max-pc:top-[calc(600*var(--mobile-px))]"
      />
      <Image
        src={food_group}
        alt=""
        className="absolute top-[calc(875*var(--px))] z-40 left-0 w-[calc(217*var(--px))] h-auto ml-[calc(1487*var(--px))]"
      />
      <Image
        src={yellowLeaf}
        alt=""
        className="animate-maple maple-delay-1 pointer-events-none absolute left-[calc(1280*var(--px))] top-[calc(-20*var(--px))] z-30 h-auto w-[calc(80*var(--px))] -rotate-[20deg]"
      />
    </section>
  );
}
