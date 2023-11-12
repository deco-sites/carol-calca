import Animate from "$store/islands/Animate.tsx";

export interface Props {
  hi: string;
  animatedIntro?: {
    line1: string;
    line2: string;
    line3: string;
  };
  animatedIntroMobile?: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  description: string;
}

export default function Hero({
  hi,
  animatedIntro,
  animatedIntroMobile,
  description,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";

  return (
    <>
      <Animate
        id={[
          "heroHi",
          "heroLine1",
        ]}
        remove={["opacity-0", "translate-y-5", "skew-y-1"]}
      />
      <Animate
        id={["heroHiM", "heroLine1M"]}
        remove={["opacity-0", "translate-y-5", "skew-y-1"]}
      />
      <div
        id="hero"
        class="container mx-auto mt-[96px] 2xl:mt-[156px] flex gap-[124px] pl-5 pr-12 lg:container lg:px-0"
      >
        <div class="flex gap-5 items-stretch w-[640px] text-3xl leading-[1.25] md:leading-[1.25] md:text-5xl tracking-[-0.7%]">
          <div
            id="hiBar"
            class={`${classes} hidden md:block flex-none w-[6px] bg-black rounded-full delay-[800ms]`}
          >
          </div>
          <div class="flex-auto">
            <h1 id="heroHi" class={`${classes} font-medium delay-100`}>{hi}</h1>
            <h2 class="text-xl hidden">
              <div id="heroLine1" class={`${classes} delay-200`}>
                {animatedIntro?.line1}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
