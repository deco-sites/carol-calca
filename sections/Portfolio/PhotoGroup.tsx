import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Animate from "$store/islands/Animate.tsx";

export interface Photo {
  image?: ImageWidget;
  title?: string;
  size?: string;
  ps?: string;
  /** @format color */
  bgColor?: string;
  animationTrigger?: "elementVisible" | "pageLoad" | "imageLoad";
  padding?: {
    sm?: {
      top?: string;
      bottom?: string;
      xAxis?: string;
    };
    md?: {
      MdTop?: string;
      MdBottom?: string;
      xAxis?: string;
    };
    lg?: {
      LgTop?: string;
      LgBottom?: string;
      xAxis?: string;
    };
  };
}

export interface Props {
  photos: Photo[];
}

export default function Projects({
  photos,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";
  const elementId = `element${Math.floor(Math.random() * Date.now())}`;

  return (
    <div class={`container mx-auto grid grid-flow-row md:grid-flow-col gap-8 mb-8 md:gap-14 md:mb-14 md:flex-row px-2 md:px-0 items-start`}>
      {photos.map((banner, i) => (
        <div class="flex flex-col gap-2 md:gap-4">
          <div
            id={elementId + i}
            class={`${classes} flex-auto delay-[300ms] md:items-center md:justify-center md:flex md:w-full md:px-0
              ${banner.bgColor ? `bg-[${banner.bgColor}]` : ""}
              ${`pt-[${banner.padding?.sm?.top ? banner.padding.sm.top : "0"}]`}
              ${`pb-[${
              banner.padding?.sm?.bottom ? banner.padding.sm.bottom : "0"
            }]`}
              ${`md:pt-[${
              banner.padding?.md?.MdTop ? banner.padding.md.MdTop : "0"
            }]`}
              ${`md:pb-[${
              banner.padding?.md?.MdBottom ? banner.padding.md.MdBottom : "0"
            }]`}
              ${`lg:pt-[${
              banner.padding?.lg?.LgTop ? banner.padding.lg.LgTop : "0"
            }]`}
              ${`lg:pb-[${
              banner.padding?.lg?.LgBottom ? banner.padding.lg.LgBottom : "0"
            }]`}
              ${`px-[${
              banner.padding?.sm?.xAxis ? banner.padding.sm.xAxis : "0"
            }]`}
              ${`md:px-[${
              banner.padding?.md?.xAxis ? banner.padding.md.xAxis : "0"
            }]`}
              ${`lg:px-[${
              banner.padding?.lg?.xAxis ? banner.padding.lg.xAxis : "0"
            }]`}
            `}
          >
            <Animate
              type="img"
              id={[elementId + i]}
              remove={["opacity-0", "translate-y-5", "skew-y-1"]}
              event={banner.animationTrigger
                ? banner.animationTrigger
                : "elementVisible"}
            />
            {banner.image &&
              (
                <Picture>
                  <Source
                    src={banner.image}
                  />
                  <img
                    preload
                    src={banner.image}
                    alt={banner.title || "Carolina Calcavecchia Photo"}
                    decoding="async"
                    srcset={`${banner.image} 1x`}
                  />
                </Picture>
              )}
          </div>
          {
            false && {
              
            }
          }
          <div class="flex flex-col md:gap-2">
            { (banner.title || banner.size) && (
              <div class="flex gap-2 md:text-lg">
                {banner.title && <h3>{banner.title}</h3>}
                {banner.size && <span class="font-thin">{banner.size}</span>}
              </div>
            ) }
            <div>
              { banner.ps && (
                <div>{banner.ps}</div>
              ) }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
