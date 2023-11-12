import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Animate from "$store/islands/Animate.tsx";

export interface Project {
  /**
   * @description Project title
   */
  label: string;
  company?: string;
  year?: string;
  comingSoon?: boolean;
  /**
   * @description Page link
   */
  href?: string;
  /**
   * @description Preview image
   */
  image?: ImageWidget;
}

export interface Props {
  sectionTitle: string;
  projects: Project[];
}

export default function Projects({
  sectionTitle,
  projects,
}: Props) {
  const classes = "duration-[1000ms] opacity-0 translate-y-5 skew-y-1";

  return (
    <div
      id="projects"
      class={`${classes} mt-20 container mx-auto md:mt-[124px] 2xl:(mt-[144px] mb-[20px]) lg:max-w-full delay-[800ms]`}
    >
      <Animate
        id={["projects"]}
        remove={["opacity-0", "translate-y-5", "skew-y-1"]}
      />
      <div class="mt-1 hidden lg:block text-xs uppercase pb-3 border-b border-subdued">
        <div class="container mx-auto">{sectionTitle}</div>
      </div>
      <div class="flex flex-col gap-16 lg:gap-0">
        {projects.map(({ label, company, year, comingSoon, href, image }) => (
          <>
            {comingSoon
              ? (
                <div class="hidden lg:block border-b border-subdued text-subsubdued">
                  <div
                    href={href}
                    class="relative items-center py-7 container mx-auto"
                  >
                    <div class="flex text-[32px]">
                      <div class="flex-none w-[745px] flex gap-4 items-center">
                        <div class="">{label}</div>
                        <div class="text-[10px] py-[6px] px-[10px] leading-[1.18] bg-[rgba(0,0,0,.05)] rounded-full uppercase font-subsubdued font-medium">
                          Coming soon
                        </div>
                      </div>
                      <div class="flex-none w-[250px] text-subsubdued text-[rgba(0,0,0,.1)]">
                        {company}
                      </div>
                      <div class="flex-auto text-subsubdued text-[rgba(0,0,0,.1)]">
                        {year}
                      </div>
                    </div>
                  </div>
                </div>
              )
              : (
                <div class="lg:(relative border-b border-subdued hover:text-white hover:bg-black transition ease-in duration-200)">
                  <a
                    href={href}
                    class="flex flex-col gap-8 md:(flex-row items-center gap-16) lg:(group container py-7 mx-auto gap-0)"
                  >
                    <div class="lg:(fixed right-[90px] bottom-16 w-0 h-0 group-hover:(w-auto h-auto) overflow-hidden z-10)">
                      <div class="hidden lg:block w-[375px] 2xl:w-[500px] h-[64px] left-[49px] bottom-5 filter blur-2xl opacity-30 absolute bg-black">
                      </div>
                      <div class="flex-none relative md:w-[375px] lg:w-[476px] 2xl:w-[500px]">
                        <Picture>
                          <Source
                            class="lg:(scale-125 group-hover:(duration-[90ms] ease-out scale-100))"
                            media="(min-width: 1536px)"
                            src={image}
                            width={500}
                            height={500}
                          />
                          <Source
                            class="lg:(scale-125 group-hover:(duration-[90ms] ease-out scale-100))"
                            media="(min-width: 1024px)"
                            src={image}
                            width={476}
                            height={476}
                          />
                          <img
                            class="lg:(scale-125 group-hover:(duration-[90ms] ease-out scale-100))"
                            src={image}
                            alt={label}
                            decoding="async"
                            srcset={`${image} 2x`}
                          />
                        </Picture>
                      </div>
                    </div>
                    <div class="flex flex-col px-5 md:px-0 gap-1 text-2xl lg:(flex-row flex-row-reverse text-3xl)">
                      <div class="flex items-center gap-2 leading-[1.18] text-subsubdued group-hover:text-[#4d4c4d]">
                        <div class="flex-none lg:w-[244px]">
                          {company}
                        </div>
                        <div class="flex-auto">{year}</div>
                      </div>
                      <div class="flex-none leading-[1.4] lg:(w-[745px] leading-[1.18])">
                        {label}
                      </div>
                    </div>
                  </a>
                </div>
              )}
          </>
        ))}
      </div>
    </div>
  );
}
