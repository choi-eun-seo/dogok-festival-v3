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
    </section>
  );
}
