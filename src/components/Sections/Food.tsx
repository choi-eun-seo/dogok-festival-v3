import OpenBook from "@/components/OpenBook";
import food from "@/assets/program/food/food.svg";
import carPink from "@/assets/program/food/car-pink.svg";
import Image from "next/image";
import { food_1, food_2 } from "@/app/app.const";

export default function Food() {
  return (
    <section
      id="food"
      className="section-target relative box-content min-h-[calc(1000*var(--px))] w-full bg-brand-green-300 pb-[calc(120*var(--px))]"
    >
      <div className="relative z-30 pt-[calc(65*var(--px))]">
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
      <div className="absolute top-0 z-20 left-0 w-[calc(1185*var(--px))] h-auto ml-[calc(366*var(--px))]">
        <OpenBook
          cover="#BAE1F6"
          edge="#EEEAE3"
          star="#BAE1F6"
          className="absolute left-0 h-auto w-[calc(1185*var(--px))]"
        />
      </div>
      <div className="flex flex-row">
        <div className="z-40 grid grid-cols-2 gap-[calc(12*var(--px))] ml-[calc(56*var(--px))] mt-[calc(324*var(--px))]">
          {food_1.map((item) => (
            <div
              key={item.name}
              className="bg-[#E9F7FF] rounded-[calc(10*var(--px))] py-[calc(20*var(--px))] w-[calc(180*var(--px))]"
            >
              <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="z-40 grid grid-cols-2 gap-[calc(12*var(--px))] ml-[calc(994*var(--px))] mt-[calc(324*var(--px))]">
          {food_2.map((item) => (
            <div
              key={item.name}
              className="h-[calc(97*var(--px))] w-[calc(180*var(--px))] bg-[#E9F7FF] rounded-[calc(10*var(--px))] py-[calc(20*var(--px))] w-[calc(180*var(--px))]"
            >
              <p className="text-brand-brown-700 text-center font-suit text-[calc(14*var(--px))] font-medium">
                {item.name}
              </p>
              <div className="mx-auto w-fit rounded-[calc(4*var(--px))] bg-[#FFAB23] px-[calc(6*var(--px))] py-[calc(2*var(--px))] text-center font-suit text-[calc(12*var(--px))] font-medium text-white mt-[calc(6*var(--px))]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
